unknownSymbols1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "asdf",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 25,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 25,
                  "decorators": [],
                  "name": "asdf",
                  "optional": false
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
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 70,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 70,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 48,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 44,
              "end": 48,
              "typeName": {
                "type": "Identifier",
                "start": 44,
                "end": 48,
                "decorators": [],
                "name": "asdf",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 59,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 66,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 62,
          "end": 66,
          "typeName": {
            "type": "Identifier",
            "start": 62,
            "end": 66,
            "decorators": [],
            "name": "asdf",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 107,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 87,
        "end": 107,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 93,
            "end": 105,
            "argument": {
              "type": "Identifier",
              "start": 100,
              "end": 104,
              "decorators": [],
              "name": "asdf",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 84,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 109,
      "end": 125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 113,
          "end": 124,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 117,
            "end": 124,
            "expression": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 122,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
                "decorators": [],
                "name": "asdf",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 160,
        "end": 196,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 166,
            "end": 176,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
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
              "start": 169,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 171,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 175,
                  "decorators": [],
                  "name": "asdf",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 194,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 193,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 193,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 187,
                  "end": 193,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 188,
                      "end": 192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 192,
                        "decorators": [],
                        "name": "asdf",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "C",
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
        "start": 155,
        "end": 156,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 156,
        "end": 159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 157,
            "end": 158,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
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
      "start": 198,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 226,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 206,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 218,
          "end": 222,
          "expression": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "decorators": [],
            "name": "asdf",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 227,
      "end": 255,
      "body": {
        "type": "TSInterfaceBody",
        "start": 252,
        "end": 255,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 247,
          "end": 251,
          "expression": {
            "type": "Identifier",
            "start": 247,
            "end": 251,
            "decorators": [],
            "name": "adsf",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 238,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 257,
      "end": 293,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 266,
        "end": 293,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 291,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 279,
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
              "start": 279,
              "end": 291,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 291,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 280,
                  "end": 286,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 281,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 283,
                      "end": 286
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
        "start": 263,
        "end": 265,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 364,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 314,
        "end": 364,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 362,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 320,
              "end": 331,
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
              "start": 331,
              "end": 362,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 334,
                "end": 362,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 344,
                    "end": 356,
                    "expression": {
                      "type": "CallExpression",
                      "start": 344,
                      "end": 355,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 350,
                          "end": 354,
                          "decorators": [],
                          "name": "asdf",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 344,
                        "end": 349
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 302,
        "decorators": [],
        "name": "C4",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
        "decorators": [],
        "name": "C3",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 372,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 375,
            "end": 384,
            "computed": false,
            "object": {
              "type": "ThisExpression",
              "start": 375,
              "end": 379
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 380,
              "end": 384,
              "decorators": [],
              "name": "asdf",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 412,
      "end": 476,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 476,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 427,
            "end": 474,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 438,
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
              "start": 438,
              "end": 474,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 441,
                "end": 474,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 451,
                    "end": 468,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 451,
                      "end": 467,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 451,
                        "end": 460,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 451,
                          "end": 455
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 460,
                          "decorators": [],
                          "name": "asdf",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 467,
                        "decorators": [],
                        "name": "asdf",
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
        "start": 418,
        "end": 420,
        "decorators": [],
        "name": "C5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
