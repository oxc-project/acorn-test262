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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Event",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 338,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 35,
              "name": "_listeners",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrayExpression",
              "start": 45,
              "end": 47,
              "elements": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 118,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 63,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 118,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 118,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 114,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 93,
                      "end": 113,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 93,
                        "end": 108,
                        "object": {
                          "type": "ThisExpression",
                          "start": 93,
                          "end": 97
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 108,
                          "name": "_listeners",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 111,
                        "end": 113,
                        "elements": []
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
          },
          {
            "type": "MethodDefinition",
            "start": 122,
            "end": 335,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 125,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 335,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 126,
                  "end": 145,
                  "name": "listener",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 136,
                      "end": 145,
                      "typeParameters": null,
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 335,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 300,
                    "end": 331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 300,
                      "end": 330,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 300,
                        "end": 320,
                        "object": {
                          "type": "MemberExpression",
                          "start": 300,
                          "end": 315,
                          "object": {
                            "type": "ThisExpression",
                            "start": 300,
                            "end": 304
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 305,
                            "end": 315,
                            "name": "_listeners",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 320,
                          "name": "push",
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
                          "start": 321,
                          "end": 329,
                          "name": "listener",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 146,
                "end": 152,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 148,
                  "end": 152
                }
              }
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
      "type": "ClassDeclaration",
      "start": 341,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 359,
        "name": "ItemSetEvent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 368,
        "end": 373,
        "name": "Event",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 374,
        "end": 453,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 379,
            "end": 450,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 379,
              "end": 382,
              "name": "add",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 382,
              "end": 450,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 383,
                  "end": 417,
                  "name": "listener",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 391,
                    "end": 417,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 393,
                      "end": 417,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 394,
                          "end": 408,
                          "name": "items",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 399,
                            "end": 408,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 401,
                              "end": 408,
                              "typeName": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 408,
                                "name": "ItemSet",
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 410,
                        "end": 417,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 413,
                          "end": 417
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 420,
                "end": 450,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 426,
                    "end": 446,
                    "expression": {
                      "type": "CallExpression",
                      "start": 426,
                      "end": 445,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 426,
                        "end": 435,
                        "object": {
                          "type": "Super",
                          "start": 426,
                          "end": 431
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 435,
                          "name": "add",
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
                          "start": 436,
                          "end": 444,
                          "name": "listener",
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
