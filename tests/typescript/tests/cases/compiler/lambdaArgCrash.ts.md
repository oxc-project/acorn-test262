__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Event",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_listeners",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 37,
                  "end": 40
                },
                "start": 37,
                "end": 42
              },
              "start": 35,
              "end": 42
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 45,
              "end": 47
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 17,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 63
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 93,
                          "end": 97
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_listeners",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 108
                        },
                        "optional": false,
                        "computed": false,
                        "start": 93,
                        "end": 108
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 111,
                        "end": 113
                      },
                      "start": 93,
                      "end": 113
                    },
                    "directive": null,
                    "start": 93,
                    "end": 114
                  }
                ],
                "start": 67,
                "end": 118
              },
              "expression": false,
              "start": 64,
              "end": 118
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 52,
            "end": 118
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 142,
                          "end": 145
                        },
                        "start": 139,
                        "end": 145
                      },
                      "start": 136,
                      "end": 145
                    },
                    "start": 134,
                    "end": 145
                  },
                  "start": 126,
                  "end": 145
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 148,
                  "end": 152
                },
                "start": 146,
                "end": 152
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 300,
                            "end": 304
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_listeners",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 305,
                            "end": 315
                          },
                          "optional": false,
                          "computed": false,
                          "start": 300,
                          "end": 315
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 320
                        },
                        "optional": false,
                        "computed": false,
                        "start": 300,
                        "end": 320
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 329
                        }
                      ],
                      "optional": false,
                      "start": 300,
                      "end": 330
                    },
                    "directive": null,
                    "start": 300,
                    "end": 331
                  }
                ],
                "start": 153,
                "end": 335
              },
              "expression": false,
              "start": 125,
              "end": 335
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 122,
            "end": 335
          }
        ],
        "start": 12,
        "end": 338
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 338
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ItemSetEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 359
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Event",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 373
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 382
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ItemSet",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 401,
                                "end": 408
                              },
                              "typeArguments": null,
                              "start": 401,
                              "end": 408
                            },
                            "start": 399,
                            "end": 408
                          },
                          "start": 394,
                          "end": 408
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 413,
                          "end": 417
                        },
                        "start": 410,
                        "end": 417
                      },
                      "start": 393,
                      "end": 417
                    },
                    "start": 391,
                    "end": 417
                  },
                  "start": 383,
                  "end": 417
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 426,
                          "end": 431
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "add",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 432,
                          "end": 435
                        },
                        "optional": false,
                        "computed": false,
                        "start": 426,
                        "end": 435
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 436,
                          "end": 444
                        }
                      ],
                      "optional": false,
                      "start": 426,
                      "end": 445
                    },
                    "directive": null,
                    "start": 426,
                    "end": 446
                  }
                ],
                "start": 420,
                "end": 450
              },
              "expression": false,
              "start": 382,
              "end": 450
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 379,
            "end": 450
          }
        ],
        "start": 374,
        "end": 453
      },
      "abstract": false,
      "declare": false,
      "start": 341,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 453
}
```
