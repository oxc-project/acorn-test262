__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "name": "asdf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 25,
            "name": "y",
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
                  "name": "asdf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 28,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 48,
          "name": "x",
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
                "name": "asdf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 50,
          "end": 59,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 51,
            "end": 59,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 67,
        "end": 70,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "asdf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 84,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "asdf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
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
                "name": "asdf",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 156,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 160,
        "end": 196,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 166,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "asdf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 181,
            "end": 194,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 193,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 193,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "asdf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 156,
        "end": 159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 157,
            "end": 158,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 198,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 206,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 226,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 218,
          "end": 222,
          "expression": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "name": "asdf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 227,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 238,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 247,
          "end": 251,
          "expression": {
            "type": "Identifier",
            "start": 247,
            "end": 251,
            "name": "adsf",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 252,
        "end": 255,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 257,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 265,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 266,
        "end": 293,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 291,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 279,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 279,
              "end": 291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 280,
                  "end": 286,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 281,
                    "end": 286,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 283,
                      "end": 286
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 288,
                "end": 291,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 294,
      "end": 364,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 302,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 311,
        "end": 313,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 314,
        "end": 364,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 362,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 320,
              "end": 331,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 331,
              "end": 362,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Super",
                        "start": 344,
                        "end": 349
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 350,
                          "end": 354,
                          "name": "asdf",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 372,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 375,
            "end": 384,
            "object": {
              "type": "ThisExpression",
              "start": 375,
              "end": 379
            },
            "property": {
              "type": "Identifier",
              "start": 380,
              "end": 384,
              "name": "asdf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 412,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 420,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 421,
        "end": 476,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 427,
            "end": 474,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 427,
              "end": 438,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 438,
              "end": 474,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 451,
                          "end": 455
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 456,
                          "end": 460,
                          "name": "asdf",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 467,
                        "name": "asdf",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
