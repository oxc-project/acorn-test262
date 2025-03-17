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
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 25,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 26,
        "end": 337,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 83,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 43,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 83,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 54,
                        "end": 60
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 83,
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
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 95,
              "end": 103,
              "name": "distance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 228,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 112,
                  "name": "p",
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
                        "name": "Point",
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
                "start": 114,
                "end": 228,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 124,
                    "end": 146,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 128,
                        "end": 145,
                        "id": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 130,
                          "name": "dx",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
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
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 144,
                              "end": 145,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 155,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 159,
                        "end": 176,
                        "id": {
                          "type": "Identifier",
                          "start": 159,
                          "end": 161,
                          "name": "dy",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
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
                              "name": "p",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                          "name": "Math",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 202,
                          "name": "sqrt",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
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
                              "name": "dx",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "Identifier",
                              "start": 208,
                              "end": 210,
                              "name": "dx",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                              "name": "dy",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 220,
                              "name": "dy",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 265,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 246,
              "name": "origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "NewExpression",
              "start": 249,
              "end": 264,
              "callee": {
                "type": "Identifier",
                "start": 253,
                "end": 258,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              ],
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 335,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 285,
              "name": "distance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 285,
              "end": 335,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "name": "p1",
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
                        "name": "Point",
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
                  "start": 297,
                  "end": 306,
                  "name": "p2",
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
                        "name": "Point",
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
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 320,
                          "end": 328,
                          "name": "distance",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 329,
                          "end": 331,
                          "name": "p2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
