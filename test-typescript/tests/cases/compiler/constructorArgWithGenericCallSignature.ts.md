__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 283,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 188,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 76,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 25,
              "end": 76,
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 76,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 52,
                    "end": 70,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 56,
                        "end": 65,
                        "decorators": [],
                        "name": "value1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 65,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 64,
                            "end": 65,
                            "typeName": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 65,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 66,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 68,
                        "end": 69,
                        "typeName": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 52,
                      "end": 55,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 53,
                          "end": 54,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 53,
                            "end": 54,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "decorators": [],
                "name": "MyFunc",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 81,
            "end": 147,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 88,
              "end": 147,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 102,
                "end": 147,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 112,
                    "end": 141,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 123,
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
                      "start": 123,
                      "end": 141,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 138,
                        "end": 141,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 124,
                          "end": 136,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 128,
                            "end": 136,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 130,
                              "end": 136,
                              "typeName": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 136,
                                "decorators": [],
                                "name": "MyFunc",
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
                "start": 94,
                "end": 101,
                "decorators": [],
                "name": "MyClass",
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
            "start": 151,
            "end": 186,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 158,
              "end": 186,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 186,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "F",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 169,
                  "end": 181,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 181,
                        "decorators": [],
                        "name": "MyFunc",
                        "optional": false
                      }
                    }
                  }
                }
              ]
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
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 210,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 210,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 199,
                  "end": 210,
                  "left": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 203,
                    "decorators": [],
                    "name": "Test",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 210,
                    "decorators": [],
                    "name": "MyFunc",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 225,
      "expression": {
        "type": "CallExpression",
        "start": 212,
        "end": 224,
        "arguments": [
          {
            "type": "Identifier",
            "start": 219,
            "end": 223,
            "decorators": [],
            "name": "func",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 212,
          "end": 218,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 212,
            "end": 216,
            "decorators": [],
            "name": "Test",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "F",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 265,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 240,
            "decorators": [],
            "name": "test",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 243,
            "end": 265,
            "arguments": [
              {
                "type": "Identifier",
                "start": 260,
                "end": 264,
                "decorators": [],
                "name": "func",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 247,
              "end": 259,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 247,
                "end": 251,
                "decorators": [],
                "name": "Test",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 252,
                "end": 259,
                "decorators": [],
                "name": "MyClass",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
