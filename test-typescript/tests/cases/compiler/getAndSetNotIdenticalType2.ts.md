__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 22,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 22,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 20,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 19,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 18,
                "end": 19,
                "typeName": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 19,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
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
        "name": "A",
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
      "type": "ClassDeclaration",
      "start": 24,
      "end": 161,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 161,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 41,
            "end": 52,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 51,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 48,
                  "end": 51,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 49,
                      "end": 50,
                      "typeName": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 50,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 104,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 104,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 104,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 98,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 88,
                      "end": 97,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 88,
                        "end": 92
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 97,
                        "decorators": [],
                        "name": "data",
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 70,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 66,
                  "end": 70,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 67,
                    "end": 70,
                    "params": [
                      {
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
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 159,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 159,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 129,
                "end": 159,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 139,
                    "end": 153,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 139,
                      "end": 152,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 139,
                        "end": 148,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 139,
                          "end": 143
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 144,
                          "end": 148,
                          "decorators": [],
                          "name": "data",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 152,
                        "decorators": [],
                        "name": "v",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 127,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 127,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 119,
                        "end": 127,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 120,
                            "end": 126
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
                        "decorators": [],
                        "name": "A",
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
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
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
      "type": "VariableDeclaration",
      "start": 163,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 171,
            "end": 178,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 188,
            "end": 191,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 201,
      "expression": {
        "type": "AssignmentExpression",
        "start": 193,
        "end": 200,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 193,
          "end": 196,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 196,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 199,
          "end": 200,
          "decorators": [],
          "name": "r",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
