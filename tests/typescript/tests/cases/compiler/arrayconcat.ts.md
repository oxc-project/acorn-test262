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
        "decorators": [],
        "name": "IOptions",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "flag",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "short",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "usage",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 112,
                      "end": 120,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 114,
                        "end": 120
                      }
                    }
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
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "experimental",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 193,
        "decorators": [],
        "name": "parser",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 194,
        "end": 588,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 197,
            "end": 224,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 211,
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "IOptions",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 586,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 235,
              "end": 586,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
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
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 274,
                            "decorators": [],
                            "name": "sort",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "FunctionExpression",
                            "start": 275,
                            "end": 581,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 284,
                                "end": 285,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              {
                                "type": "Identifier",
                                "start": 287,
                                "end": 288,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 290,
                              "end": 581,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 304,
                                  "end": 337,
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 308,
                                      "end": 336,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 308,
                                        "end": 313,
                                        "decorators": [],
                                        "name": "aName",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                              "decorators": [],
                                              "name": "a",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 318,
                                              "end": 322,
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 323,
                                            "end": 334,
                                            "decorators": [],
                                            "name": "toLowerCase",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
                                  "declare": false
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 350,
                                  "end": 383,
                                  "kind": "var",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 354,
                                      "end": 382,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 354,
                                        "end": 359,
                                        "decorators": [],
                                        "name": "bName",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                              "decorators": [],
                                              "name": "b",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 364,
                                              "end": 368,
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "computed": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 369,
                                            "end": 380,
                                            "decorators": [],
                                            "name": "toLowerCase",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      "definite": false
                                    }
                                  ],
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
                                      "decorators": [],
                                      "name": "aName",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "operator": ">",
                                    "right": {
                                      "type": "Identifier",
                                      "start": 409,
                                      "end": 414,
                                      "decorators": [],
                                      "name": "bName",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "aName",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "operator": "<",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 475,
                                        "end": 480,
                                        "decorators": [],
                                        "name": "bName",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                            "argument": {
                                              "type": "Literal",
                                              "start": 508,
                                              "end": 509,
                                              "value": 1,
                                              "raw": "1"
                                            },
                                            "prefix": true
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
                            "expression": false
                          }
                        ],
                        "optional": false
                      }
                    },
                    "directive": null
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
