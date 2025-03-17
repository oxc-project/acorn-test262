__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 363,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 148,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 29,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 69,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
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
                  "start": 48,
                  "end": 64,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 64,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 58,
                        "end": 64
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
                "start": 66,
                "end": 69,
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
            "start": 74,
            "end": 146,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 89,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 146,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "left": {
                        "type": "BinaryExpression",
                        "start": 109,
                        "end": 130,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 109,
                          "end": 122,
                          "left": {
                            "type": "Literal",
                            "start": 109,
                            "end": 113,
                            "value": "x=",
                            "raw": "\"x=\""
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "start": 116,
                            "end": 122,
                            "object": {
                              "type": "ThisExpression",
                              "start": 116,
                              "end": 120
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 122,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          }
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 125,
                          "end": 130,
                          "value": " y=",
                          "raw": "\" y=\""
                        }
                      },
                      "operator": "+",
                      "right": {
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
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
      "start": 149,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 167,
        "name": "ColoredPoint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 181,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 362,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 272,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 188,
              "end": 199,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 199,
              "end": 272,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 200,
                  "end": 209,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 201,
                    "end": 209,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 203,
                      "end": 209
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 211,
                  "end": 220,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 212,
                    "end": 220,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 214,
                      "end": 220
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                    "name": "color",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 234,
                      "end": 242,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 236,
                        "end": 242
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
                "start": 244,
                "end": 272,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 266,
                    "expression": {
                      "type": "CallExpression",
                      "start": 254,
                      "end": 265,
                      "callee": {
                        "type": "Super",
                        "start": 254,
                        "end": 259
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 260,
                          "end": 261,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 263,
                          "end": 264,
                          "name": "y",
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
          },
          {
            "type": "MethodDefinition",
            "start": 277,
            "end": 360,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 292,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 360,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "left": {
                        "type": "BinaryExpression",
                        "start": 312,
                        "end": 340,
                        "left": {
                          "type": "CallExpression",
                          "start": 312,
                          "end": 328,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 312,
                            "end": 326,
                            "object": {
                              "type": "Super",
                              "start": 312,
                              "end": 317
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 318,
                              "end": 326,
                              "name": "toString",
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
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 331,
                          "end": 340,
                          "value": " color=",
                          "raw": "\" color=\""
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 343,
                        "end": 353,
                        "object": {
                          "type": "ThisExpression",
                          "start": 343,
                          "end": 347
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 353,
                          "name": "color",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
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
