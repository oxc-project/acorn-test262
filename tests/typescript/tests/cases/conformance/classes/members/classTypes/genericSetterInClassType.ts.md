__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 401,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 401,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 401,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 21,
            "end": 122,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 28,
              "end": 31,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 29,
                  "end": 30,
                  "name": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 122,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 42,
                  "end": 95,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 47,
                    "end": 95,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 52,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 51,
                        "end": 52,
                        "typeName": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 52,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 53,
                      "end": 95,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 67,
                          "end": 85,
                          "argument": {
                            "type": "TSAsExpression",
                            "start": 74,
                            "end": 84,
                            "expression": {
                              "type": "Literal",
                              "start": 74,
                              "end": 75,
                              "value": 1,
                              "raw": "1"
                            },
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 79,
                              "end": 84
                            }
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
                  "start": 104,
                  "end": 116,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 109,
                    "end": 116,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 110,
                        "end": 111,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 113,
                      "end": 116,
                      "body": []
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
            "type": "VariableDeclaration",
            "start": 128,
            "end": 152,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 132,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 136,
                  "end": 151,
                  "callee": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 141,
                    "end": 149,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 142,
                        "end": 148
                      }
                    ]
                  },
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 157,
            "end": 167,
            "expression": {
              "type": "AssignmentExpression",
              "start": 157,
              "end": 166,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 157,
                "end": 160,
                "object": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 158,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 163,
                "end": 166,
                "object": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 166,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "directive": null
          },
          {
            "type": "ClassDeclaration",
            "start": 173,
            "end": 361,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 182,
              "end": 185,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 183,
                  "end": 184,
                  "name": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 186,
              "end": 361,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 196,
                  "end": 207,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 196,
                    "end": 202,
                    "name": "value"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 203,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 205,
                      "end": 206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 206,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 225,
                  "end": 280,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 234,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 234,
                    "end": 280,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 237,
                      "end": 280,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 251,
                          "end": 270,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 258,
                            "end": 269,
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 263,
                              "end": 269,
                              "name": "value"
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
                  "start": 294,
                  "end": 355,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 298,
                    "end": 303,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 303,
                    "end": 355,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 304,
                        "end": 309,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 311,
                      "end": 355,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 325,
                          "end": 345,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 325,
                            "end": 344,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 325,
                              "end": 336,
                              "object": {
                                "type": "ThisExpression",
                                "start": 325,
                                "end": 329
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 330,
                                "end": 336,
                                "name": "value"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 339,
                              "end": 344,
                              "decorators": [],
                              "name": "value",
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
            "type": "ExpressionStatement",
            "start": 371,
            "end": 399,
            "expression": {
              "type": "AssignmentExpression",
              "start": 371,
              "end": 398,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 371,
                "end": 394,
                "object": {
                  "type": "NewExpression",
                  "start": 371,
                  "end": 388,
                  "callee": {
                    "type": "Identifier",
                    "start": 375,
                    "end": 378,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 378,
                    "end": 386,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 379,
                        "end": 385
                      }
                    ]
                  },
                  "arguments": []
                },
                "property": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 394,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 397,
                "end": 398,
                "value": 3,
                "raw": "3"
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
