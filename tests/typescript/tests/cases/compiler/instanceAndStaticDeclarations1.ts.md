__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 337,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 14,
      "end": 337,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 25,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 337,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 83,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 43,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 83,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 44,
                  "end": 60,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 60,
                    "decorators": [],
                    "name": "x",
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
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 62,
                  "end": 78,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 78,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 83,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 228,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 103,
              "decorators": [],
              "name": "distance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 228,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 112,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 112,
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 112,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 228,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 124,
                    "end": 146,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 128,
                        "end": 145,
                        "id": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 130,
                          "decorators": [],
                          "name": "dx",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 133,
                          "end": 145,
                          "left": {
                            "type": "MemberExpression",
                            "start": 133,
                            "end": 139,
                            "object": {
                              "type": "ThisExpression",
                              "start": 133,
                              "end": 137
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 139,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "-",
                          "right": {
                            "type": "MemberExpression",
                            "start": 142,
                            "end": 145,
                            "object": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 143,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 155,
                    "end": 177,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 159,
                        "end": 176,
                        "id": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 161,
                          "decorators": [],
                          "name": "dy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 164,
                          "end": 176,
                          "left": {
                            "type": "MemberExpression",
                            "start": 164,
                            "end": 170,
                            "object": {
                              "type": "ThisExpression",
                              "start": 164,
                              "end": 168
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 170,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "operator": "-",
                          "right": {
                            "type": "MemberExpression",
                            "start": 173,
                            "end": 176,
                            "object": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 174,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 186,
                    "end": 222,
                    "argument": {
                      "type": "CallExpression",
                      "start": 193,
                      "end": 221,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 193,
                        "end": 202,
                        "object": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 197,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 202,
                          "decorators": [],
                          "name": "sqrt",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 203,
                          "end": 220,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 203,
                            "end": 210,
                            "left": {
                              "type": "Identifier",
                              "start": 203,
                              "end": 205,
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "*",
                            "right": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 210,
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "BinaryExpression",
                            "start": 213,
                            "end": 220,
                            "left": {
                              "type": "Identifier",
                              "start": 213,
                              "end": 215,
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "*",
                            "right": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 220,
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 265,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 246,
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 249,
              "end": 264,
              "callee": {
                "type": "Identifier",
                "start": 253,
                "end": 258,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 259,
                  "end": 260,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 262,
                  "end": 263,
                  "value": 0,
                  "raw": "0"
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 335,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 285,
              "decorators": [],
              "name": "distance",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 285,
              "end": 335,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 288,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 295,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 295,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 297,
                  "end": 306,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 299,
                    "end": 306,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 301,
                      "end": 306,
                      "typeName": {
                        "type": "Identifier",
                        "start": 301,
                        "end": 306,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 308,
                "end": 335,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 310,
                    "end": 333,
                    "argument": {
                      "type": "CallExpression",
                      "start": 317,
                      "end": 332,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 317,
                        "end": 328,
                        "object": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 319,
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 328,
                          "decorators": [],
                          "name": "distance",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 329,
                          "end": 331,
                          "decorators": [],
                          "name": "p2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
