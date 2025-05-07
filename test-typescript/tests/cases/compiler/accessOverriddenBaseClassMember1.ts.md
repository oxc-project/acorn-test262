__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 148,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
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
              "start": 29,
              "end": 69,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 69,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 30,
                  "end": 46,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 46,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 48,
                  "end": 64,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 64,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 58,
                        "end": 64
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 146,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 89,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 146,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 146,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 102,
                    "end": 140,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 109,
                      "end": 139,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 109,
                        "end": 130,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 109,
                          "end": 122,
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "start": 109,
                            "end": 113,
                            "raw": "\"x=\"",
                            "value": "x=",
                            "regex": null,
                            "bigint": null
                          },
                          "right": {
                            "type": "MemberExpression",
                            "start": 116,
                            "end": 122,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 116,
                              "end": 120
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 122,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 125,
                          "end": 130,
                          "raw": "\" y=\"",
                          "value": " y=",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 133,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 133,
                          "end": 137
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 362,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 362,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 272,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 199,
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
              "start": 199,
              "end": 272,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 272,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 266,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 254,
                      "end": 265,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 260,
                          "end": 261,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 254,
                        "end": 259
                      },
                      "optional": false,
                      "typeArguments": null
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
                  "start": 200,
                  "end": 209,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 203,
                      "end": 209
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 220,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 212,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 214,
                      "end": 220
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 222,
                  "end": 242,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 242,
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 234,
                      "end": 242,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 236,
                        "end": 242
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 360,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 292,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 360,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 295,
                "end": 360,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 305,
                    "end": 354,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 312,
                      "end": 353,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 312,
                        "end": 340,
                        "operator": "+",
                        "left": {
                          "type": "CallExpression",
                          "start": 312,
                          "end": 328,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 312,
                            "end": 326,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 312,
                              "end": 317
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 318,
                              "end": 326,
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 331,
                          "end": 340,
                          "raw": "\" color=\"",
                          "value": " color=",
                          "regex": null,
                          "bigint": null
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 343,
                        "end": 353,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 343,
                          "end": 347
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 353,
                          "decorators": [],
                          "name": "color",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 167,
        "decorators": [],
        "name": "ColoredPoint",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 181,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
