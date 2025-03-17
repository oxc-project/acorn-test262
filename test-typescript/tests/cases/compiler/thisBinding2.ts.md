__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 412,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 11,
            "end": 21,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
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
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 176,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 37,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 37,
              "end": 176,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 50,
                    "end": 107,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 50,
                      "end": 106,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 50,
                        "end": 56,
                        "object": {
                          "type": "ThisExpression",
                          "start": 50,
                          "end": 54
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 56,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 59,
                        "end": 106,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 60,
                          "end": 103,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 66,
                            "end": 103,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 71,
                                "end": 81,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 75,
                                    "end": 80,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 75,
                                      "end": 76,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 79,
                                      "end": 80,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 85,
                                "end": 99,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 92,
                                  "end": 98,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 92,
                                    "end": 96
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 97,
                                    "end": 98,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 170,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 110,
                      "end": 169,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 110,
                        "end": 116,
                        "object": {
                          "type": "ThisExpression",
                          "start": 110,
                          "end": 114
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "CallExpression",
                        "start": 119,
                        "end": 169,
                        "callee": {
                          "type": "FunctionExpression",
                          "start": 119,
                          "end": 167,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 130,
                            "end": 167,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 135,
                                "end": 145,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 139,
                                    "end": 144,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 139,
                                      "end": 140,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "start": 143,
                                      "end": 144,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "var",
                                "declare": false
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 149,
                                "end": 163,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 156,
                                  "end": 162,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 156,
                                    "end": 160
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 161,
                                    "end": 162,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
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
      "type": "TSDeclareFunction",
      "start": 181,
      "end": 265,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 208,
        "name": "setTimeout",
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
          "start": 209,
          "end": 224,
          "name": "expression",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 224,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 221,
              "end": 224
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 226,
          "end": 239,
          "name": "msec",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 239,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 233,
              "end": 239
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 241,
          "end": 255,
          "name": "language",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 250,
            "end": 255,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 252,
              "end": 255
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 256,
        "end": 264,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 258,
          "end": 264
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 410,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 279,
            "name": "messenger",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 282,
            "end": 410,
            "properties": [
              {
                "type": "Property",
                "start": 288,
                "end": 310,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 295,
                  "name": "message",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 297,
                  "end": 310,
                  "value": "Hello World",
                  "raw": "\"Hello World\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 316,
                "end": 408,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 321,
                  "name": "start",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 323,
                  "end": 408,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 335,
                    "end": 408,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 345,
                        "end": 402,
                        "argument": {
                          "type": "CallExpression",
                          "start": 352,
                          "end": 401,
                          "callee": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 362,
                            "name": "setTimeout",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 363,
                              "end": 394,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 369,
                                "end": 394,
                                "body": [
                                  {
                                    "type": "VariableDeclaration",
                                    "start": 371,
                                    "end": 392,
                                    "declarations": [
                                      {
                                        "type": "VariableDeclarator",
                                        "start": 375,
                                        "end": 391,
                                        "id": {
                                          "type": "Identifier",
                                          "start": 375,
                                          "end": 376,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "init": {
                                          "type": "MemberExpression",
                                          "start": 379,
                                          "end": 391,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 379,
                                            "end": 383
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 384,
                                            "end": 391,
                                            "name": "message",
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
                                  }
                                ]
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            {
                              "type": "Literal",
                              "start": 396,
                              "end": 400,
                              "value": 3000,
                              "raw": "3000"
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
