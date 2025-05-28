__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 769,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 30,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
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
      "type": "VariableDeclaration",
      "start": 49,
      "end": 177,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 63,
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 66,
            "end": 177,
            "properties": [
              {
                "type": "Property",
                "start": 72,
                "end": 77,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 75,
                  "end": 77,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 83,
                "end": 126,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 88,
                  "end": 126,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 89,
                      "end": 98,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 93,
                        "end": 98,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 95,
                          "end": 98,
                          "typeName": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 98,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 99,
                    "end": 107,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 101,
                      "end": 107
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 108,
                    "end": 126,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 110,
                        "end": 124,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 117,
                          "end": 123,
                          "object": {
                            "type": "ThisExpression",
                            "start": 117,
                            "end": 121
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 123,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 132,
                "end": 175,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 137,
                  "end": 175,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 138,
                      "end": 147,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 142,
                        "end": 147,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 144,
                          "end": 147,
                          "typeName": {
                            "type": "Identifier",
                            "start": 144,
                            "end": 147,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 149,
                      "end": 158,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 150,
                        "end": 158,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 152,
                          "end": 158
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 160,
                    "end": 175,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 162,
                        "end": 173,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 162,
                          "end": 172,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 162,
                            "end": 168,
                            "object": {
                              "type": "ThisExpression",
                              "start": 162,
                              "end": 166
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 167,
                              "end": 168,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 171,
                            "end": 172,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 295,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 200,
            "decorators": [],
            "name": "copiedFromGetter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 203,
            "end": 295,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 214,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 212,
                  "end": 214,
                  "value": 14,
                  "raw": "14"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 220,
                "end": 263,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 225,
                  "end": 263,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 226,
                      "end": 235,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 230,
                        "end": 235,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 232,
                          "end": 235,
                          "typeName": {
                            "type": "Identifier",
                            "start": 232,
                            "end": 235,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 244,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 238,
                      "end": 244
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 245,
                    "end": 263,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 247,
                        "end": 261,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 254,
                          "end": 260,
                          "object": {
                            "type": "ThisExpression",
                            "start": 254,
                            "end": 258
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 259,
                            "end": 260,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 269,
                "end": 293,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 274,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 274,
                  "end": 293,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 275,
                      "end": 276,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 278,
                    "end": 293,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 280,
                        "end": 291,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 280,
                          "end": 290,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 280,
                            "end": 286,
                            "object": {
                              "type": "ThisExpression",
                              "start": 280,
                              "end": 284
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 285,
                              "end": 286,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 289,
                            "end": 290,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 414,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 318,
            "decorators": [],
            "name": "copiedFromSetter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 321,
            "end": 414,
            "properties": [
              {
                "type": "Property",
                "start": 327,
                "end": 332,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 330,
                  "end": 332,
                  "value": 15,
                  "raw": "15"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 338,
                "end": 363,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 343,
                  "end": 363,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 346,
                    "end": 363,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 348,
                        "end": 361,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 355,
                          "end": 361,
                          "object": {
                            "type": "ThisExpression",
                            "start": 355,
                            "end": 359
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 360,
                            "end": 361,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 369,
                "end": 412,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 374,
                  "end": 412,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 375,
                      "end": 384,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 379,
                        "end": 384,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 381,
                          "end": 384,
                          "typeName": {
                            "type": "Identifier",
                            "start": 381,
                            "end": 384,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 386,
                      "end": 395,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 387,
                        "end": 395,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 389,
                          "end": 395
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 397,
                    "end": 412,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 399,
                        "end": 410,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 399,
                          "end": 409,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 399,
                            "end": 405,
                            "object": {
                              "type": "ThisExpression",
                              "start": 399,
                              "end": 403
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 404,
                              "end": 405,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 408,
                            "end": 409,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 540,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 540,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 448,
            "decorators": [],
            "name": "copiedFromGetterUnannotated",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 451,
            "end": 540,
            "properties": [
              {
                "type": "Property",
                "start": 457,
                "end": 462,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 460,
                  "end": 462,
                  "value": 16,
                  "raw": "16"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 468,
                "end": 502,
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 473,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 473,
                  "end": 502,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 474,
                      "end": 483,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 478,
                        "end": 483,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 480,
                          "end": 483,
                          "typeName": {
                            "type": "Identifier",
                            "start": 480,
                            "end": 483,
                            "decorators": [],
                            "name": "Foo",
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
                    "start": 485,
                    "end": 502,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 487,
                        "end": 500,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 494,
                          "end": 500,
                          "object": {
                            "type": "ThisExpression",
                            "start": 494,
                            "end": 498
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 499,
                            "end": 500,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 508,
                "end": 538,
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 513,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 513,
                  "end": 538,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 514,
                      "end": 518,
                      "decorators": [],
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 520,
                      "end": 521,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 523,
                    "end": 538,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 525,
                        "end": 536,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 525,
                          "end": 535,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 525,
                            "end": 531,
                            "object": {
                              "type": "ThisExpression",
                              "start": 525,
                              "end": 529
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 530,
                              "end": 531,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 534,
                            "end": 535,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 542,
      "end": 668,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 556,
        "decorators": [],
        "name": "Explicit",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 557,
        "end": 668,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 563,
            "end": 570,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 563,
              "end": 564,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 567,
              "end": 569,
              "value": 17,
              "raw": "17"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 575,
            "end": 618,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 579,
              "end": 580,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 580,
              "end": 618,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 581,
                  "end": 590,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 585,
                    "end": 590,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 587,
                      "end": 590,
                      "typeName": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 590,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 591,
                "end": 599,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 593,
                  "end": 599
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 600,
                "end": 618,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 602,
                    "end": 616,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 609,
                      "end": 615,
                      "object": {
                        "type": "ThisExpression",
                        "start": 609,
                        "end": 613
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 615,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 623,
            "end": 666,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 628,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 628,
              "end": 666,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 629,
                  "end": 638,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 633,
                    "end": 638,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 635,
                      "end": 638,
                      "typeName": {
                        "type": "Identifier",
                        "start": 635,
                        "end": 638,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 640,
                  "end": 649,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 641,
                    "end": 649,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 643,
                      "end": 649
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 651,
                "end": 666,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 653,
                    "end": 664,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 653,
                      "end": 663,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 653,
                        "end": 659,
                        "object": {
                          "type": "ThisExpression",
                          "start": 653,
                          "end": 657
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 659,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 662,
                        "end": 663,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 669,
      "end": 769,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 685,
        "decorators": [],
        "name": "Contextual",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 686,
        "end": 769,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 692,
            "end": 699,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 692,
              "end": 693,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 696,
              "end": 698,
              "value": 21,
              "raw": "21"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 704,
            "end": 729,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 709,
              "end": 729,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 712,
                "end": 729,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 714,
                    "end": 727,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 721,
                      "end": 727,
                      "object": {
                        "type": "ThisExpression",
                        "start": 721,
                        "end": 725
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 726,
                        "end": 727,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
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
