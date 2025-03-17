__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 51,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "name": "self",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 49,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 49,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 31,
                    "end": 43,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 38,
                      "end": 42
                    }
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
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "name": "f",
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
          "start": 77,
          "end": 81,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 78,
            "end": 81,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 81,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 168,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 89,
            "end": 148,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "g",
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
                "start": 113,
                "end": 117,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 114,
                  "end": 117,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 116,
                    "end": 117,
                    "typeName": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 119,
              "end": 148,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 129,
                  "end": 142,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 129,
                    "end": 141,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 133,
                      "end": 141,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 139,
                        "object": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 139,
                          "name": "self",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 99,
              "end": 112,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 100,
                  "end": 111,
                  "name": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 110,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 166,
            "expression": {
              "type": "AssignmentExpression",
              "start": 153,
              "end": 165,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 157,
                "end": 165,
                "callee": {
                  "type": "MemberExpression",
                  "start": 157,
                  "end": 163,
                  "object": {
                    "type": "Identifier",
                    "start": 157,
                    "end": 158,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 163,
                    "name": "self",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 63,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 75,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 74,
              "end": 75,
              "typeName": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 170,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 177,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 191,
        "end": 295,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 236,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 200,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 200,
              "end": 236,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 205,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 205,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 204,
                      "end": 205,
                      "typeName": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 205,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 207,
                "end": 236,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 230,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 217,
                      "end": 229,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 218,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 221,
                        "end": 229,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 221,
                          "end": 227,
                          "object": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 222,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 223,
                            "end": 227,
                            "name": "self",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
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
          },
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 293,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 293,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 258,
                  "end": 262,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 262,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 261,
                      "end": 262,
                      "typeName": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 262,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 264,
                "end": 293,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 274,
                    "end": 287,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 274,
                      "end": 286,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 274,
                        "end": 275,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 278,
                        "end": 286,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 278,
                          "end": 284,
                          "object": {
                            "type": "Identifier",
                            "start": 278,
                            "end": 279,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 280,
                            "end": 284,
                            "name": "self",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 244,
                "end": 257,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 245,
                    "end": 256,
                    "name": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 256,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 256,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 177,
        "end": 190,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 178,
            "end": 189,
            "name": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 189,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 189,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
