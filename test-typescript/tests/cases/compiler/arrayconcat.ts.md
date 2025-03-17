__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 588,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "IOptions",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 179,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 39,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 59,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "name": "flag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 58,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 51,
                "end": 58
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 79,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 69,
              "name": "short",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 99,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 89,
              "name": "usage",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 130,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "name": "set",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 129,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 110,
                "end": 129,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 111,
                    "end": 120,
                    "name": "s",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 114,
                        "end": 120
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 122,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 125,
                    "end": 129
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 135,
            "end": 149,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 139,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 142,
                "end": 148
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 154,
            "end": 177,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 166,
              "name": "experimental",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 176,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 169,
                "end": 176
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 181,
      "end": 588,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 193,
        "name": "parser",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 194,
        "end": 588,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 197,
            "end": 224,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 211,
              "name": "options",
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
              "start": 211,
              "end": 223,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 213,
                "end": 223,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 213,
                  "end": 221,
                  "typeName": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 221,
                    "name": "IOptions",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 586,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 586,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 238,
                "end": 586,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 242,
                    "end": 583,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 242,
                      "end": 582,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 242,
                        "end": 254,
                        "object": {
                          "type": "ThisExpression",
                          "start": 242,
                          "end": 246
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 254,
                          "name": "options",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 257,
                        "end": 582,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 257,
                          "end": 274,
                          "object": {
                            "type": "MemberExpression",
                            "start": 257,
                            "end": 269,
                            "object": {
                              "type": "ThisExpression",
                              "start": 257,
                              "end": 261
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 262,
                              "end": 269,
                              "name": "options",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 274,
                            "name": "sort",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "start": 275,
                            "end": 581,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 284,
                                "end": 285,
                                "name": "a",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              {
                                "type": "Identifier",
                                "start": 287,
                                "end": 288,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "BlockStatement",
                              "start": 290,
                              "end": 581,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 304,
                                  "end": 337,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 308,
                                      "end": 336,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 308,
                                        "end": 313,
                                        "name": "aName",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "start": 316,
                                        "end": 336,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 316,
                                          "end": 334,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 316,
                                            "end": 322,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 316,
                                              "end": 317,
                                              "name": "a",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 318,
                                              "end": 322,
                                              "name": "name",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 323,
                                            "end": 334,
                                            "name": "toLowerCase",
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
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 350,
                                  "end": 383,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 354,
                                      "end": 382,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 354,
                                        "end": 359,
                                        "name": "bName",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "start": 362,
                                        "end": 382,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 362,
                                          "end": 380,
                                          "object": {
                                            "type": "MemberExpression",
                                            "start": 362,
                                            "end": 368,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 362,
                                              "end": 363,
                                              "name": "b",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 364,
                                              "end": 368,
                                              "name": "name",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 369,
                                            "end": 380,
                                            "name": "toLowerCase",
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
                                      "definite": false
                                    }
                                  ],
                                  "kind": "var",
                                  "declare": false
                                },
                                {
                                  "type": "IfStatement",
                                  "start": 397,
                                  "end": 571,
                                  "test": {
                                    "type": "BinaryExpression",
                                    "start": 401,
                                    "end": 414,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 401,
                                      "end": 406,
                                      "name": "aName",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Identifier",
                                      "start": 409,
                                      "end": 414,
                                      "name": "bName",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "start": 416,
                                    "end": 457,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 434,
                                        "end": 443,
                                        "argument": {
                                          "type": "Literal",
                                          "start": 441,
                                          "end": 442,
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "IfStatement",
                                    "start": 463,
                                    "end": 571,
                                    "test": {
                                      "type": "BinaryExpression",
                                      "start": 467,
                                      "end": 480,
                                      "left": {
                                        "type": "Identifier",
                                        "start": 467,
                                        "end": 472,
                                        "name": "aName",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "operator": "<",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 475,
                                        "end": 480,
                                        "name": "bName",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    "consequent": {
                                      "type": "BlockStatement",
                                      "start": 482,
                                      "end": 524,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 500,
                                          "end": 510,
                                          "argument": {
                                            "type": "UnaryExpression",
                                            "start": 507,
                                            "end": 509,
                                            "operator": "-",
                                            "prefix": true,
                                            "argument": {
                                              "type": "Literal",
                                              "start": 508,
                                              "end": 509,
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    "alternate": {
                                      "type": "BlockStatement",
                                      "start": 530,
                                      "end": 571,
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "start": 548,
                                          "end": 557,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 555,
                                            "end": 556,
                                            "value": 0,
                                            "raw": "0"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          }
                        ],
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
