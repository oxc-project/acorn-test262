__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 313,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 38,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 65,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 65,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 59,
                      "end": 60,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 60,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 194,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 73,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 194,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 194,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 103,
                    "end": 168,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 135,
                      "end": 168,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 149,
                          "end": 158,
                          "argument": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 157,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 115,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 129,
                        "end": 133,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 130,
                          "end": 133,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 132,
                            "end": 133,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 132,
                              "end": 133,
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 115,
                      "end": 128,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 116,
                          "end": 127,
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 126,
                            "end": 127,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 126,
                              "end": 127,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 116,
                            "end": 117,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 177,
                    "end": 188,
                    "argument": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 187,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 87,
                  "end": 91,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 91,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 90,
                      "end": 91,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 73,
                "end": 86,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 74,
                    "end": 85,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 84,
                      "end": 85,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 85,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 75,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 36,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 18,
              "end": 36,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 20,
                  "end": 34,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 26,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 26,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 227,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 226,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 203,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 206,
            "end": 226,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 212,
                "end": 225,
                "properties": [
                  {
                    "type": "Property",
                    "start": 214,
                    "end": 223,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 214,
                      "end": 220,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 222,
                      "end": 223,
                      "raw": "2",
                      "value": 2
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 228,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 233,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 245,
            "arguments": [
              {
                "type": "Literal",
                "start": 242,
                "end": 244,
                "raw": "''",
                "value": ""
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 236,
              "end": 241,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 236,
                "end": 237,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 238,
                "end": 241,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 253,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 256,
            "end": 303,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 258,
                "end": 302,
                "properties": [
                  {
                    "type": "Property",
                    "start": 260,
                    "end": 269,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 266,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 268,
                      "end": 269,
                      "raw": "3",
                      "value": 3
                    }
                  },
                  {
                    "type": "Property",
                    "start": 271,
                    "end": 300,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 277,
                      "decorators": [],
                      "name": "charAt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "start": 279,
                      "end": 300,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 294,
                        "end": 300,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 296,
                            "end": 298,
                            "directive": "",
                            "expression": {
                              "type": "Literal",
                              "start": 296,
                              "end": 298,
                              "raw": "''",
                              "value": ""
                            }
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 280,
                          "end": 289,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 281,
                            "end": 289,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 283,
                              "end": 289
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
