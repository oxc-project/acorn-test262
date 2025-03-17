__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 338,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 338,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 48,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "decorators": [],
              "name": "_listeners",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 42,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 37,
                "end": 42,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 37,
                  "end": 40
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 45,
              "end": 47,
              "elements": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 118,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
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
              "start": 64,
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 118,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 114,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 93,
                      "end": 113,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 93,
                        "end": 108,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 93,
                          "end": 97
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 108,
                          "decorators": [],
                          "name": "_listeners",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 111,
                        "end": 113,
                        "elements": []
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
          },
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 335,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 335,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 335,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 300,
                    "end": 331,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 300,
                      "end": 330,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 321,
                          "end": 329,
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 300,
                        "end": 320,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 300,
                          "end": 315,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 300,
                            "end": 304
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 305,
                            "end": 315,
                            "decorators": [],
                            "name": "_listeners",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 320,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 126,
                  "end": 145,
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 136,
                      "end": 145,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 139,
                        "end": 145,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 142,
                          "end": 145
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 146,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 148,
                  "end": 152
                }
              },
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
        "name": "Event",
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
      "start": 341,
      "end": 453,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 374,
        "end": 453,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 379,
            "end": 450,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 379,
              "end": 382,
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 382,
              "end": 450,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 420,
                "end": 450,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 426,
                    "end": 446,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 426,
                      "end": 445,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 436,
                          "end": 444,
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 426,
                        "end": 435,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 426,
                          "end": 431
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 435,
                          "decorators": [],
                          "name": "add",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                  "start": 383,
                  "end": 417,
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 391,
                    "end": 417,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 393,
                      "end": 417,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 394,
                          "end": 408,
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 399,
                            "end": 408,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 401,
                              "end": 408,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 408,
                                "decorators": [],
                                "name": "ItemSet",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 410,
                        "end": 417,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 413,
                          "end": 417
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
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
        "start": 347,
        "end": 359,
        "decorators": [],
        "name": "ItemSetEvent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 368,
        "end": 373,
        "decorators": [],
        "name": "Event",
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
