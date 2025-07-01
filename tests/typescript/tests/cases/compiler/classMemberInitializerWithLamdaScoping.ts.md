__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 27,
                      "end": 30
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 37,
                            "end": 40
                          },
                          "start": 35,
                          "end": 40
                        },
                        "start": 31,
                        "end": 40
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 43,
                        "end": 47
                      },
                      "start": 41,
                      "end": 47
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 48
                  }
                ],
                "start": 21,
                "end": 50
              },
              "start": 19,
              "end": 50
            },
            "start": 12,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 62
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 80
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 96,
                        "end": 102
                      },
                      "start": 94,
                      "end": 102
                    },
                    "start": 89,
                    "end": 102
                  },
                  "readonly": false,
                  "static": false,
                  "start": 81,
                  "end": 102
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 104,
                "end": 111
              },
              "expression": false,
              "start": 80,
              "end": 111
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 69,
            "end": 111
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 130
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 153,
                          "end": 158
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 161,
                            "end": 165
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 166,
                            "end": 171
                          },
                          "optional": false,
                          "computed": false,
                          "start": 161,
                          "end": 171
                        },
                        "definite": false,
                        "start": 153,
                        "end": 171
                      }
                    ],
                    "declare": false,
                    "start": 149,
                    "end": 172
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 188
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 189,
                          "end": 192
                        },
                        "optional": false,
                        "computed": false,
                        "start": 181,
                        "end": 192
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 198
                        }
                      ],
                      "optional": false,
                      "start": 181,
                      "end": 199
                    },
                    "directive": null,
                    "start": 181,
                    "end": 200
                  }
                ],
                "start": 139,
                "end": 244
              },
              "id": null,
              "generator": false,
              "start": 133,
              "end": 244
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 116,
            "end": 245
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 264,
                "end": 270
              },
              "start": 262,
              "end": 270
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 250,
            "end": 271
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMessageHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 303
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 331
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 334,
                            "end": 338
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 344
                          },
                          "optional": false,
                          "computed": false,
                          "start": 334,
                          "end": 344
                        },
                        "definite": false,
                        "start": 326,
                        "end": 344
                      }
                    ],
                    "declare": false,
                    "start": 322,
                    "end": 345
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 354,
                          "end": 361
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 362,
                          "end": 365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 354,
                        "end": 365
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 371
                        }
                      ],
                      "optional": false,
                      "start": 354,
                      "end": 372
                    },
                    "directive": null,
                    "start": 354,
                    "end": 373
                  }
                ],
                "start": 312,
                "end": 417
              },
              "id": null,
              "generator": false,
              "start": 306,
              "end": 417
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 276,
            "end": 418
          }
        ],
        "start": 63,
        "end": 420
      },
      "abstract": false,
      "declare": false,
      "start": 52,
      "end": 420
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "field1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 434,
                "end": 440
              },
              "start": 432,
              "end": 440
            },
            "start": 426,
            "end": 440
          },
          "init": null,
          "definite": false,
          "start": 426,
          "end": 440
        }
      ],
      "declare": false,
      "start": 422,
      "end": 441
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 453
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 471
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "field1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 488,
                        "end": 494
                      },
                      "start": 486,
                      "end": 494
                    },
                    "start": 480,
                    "end": 494
                  },
                  "readonly": false,
                  "static": false,
                  "start": 472,
                  "end": 494
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 496,
                "end": 503
              },
              "expression": false,
              "start": 471,
              "end": 503
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 460,
            "end": 503
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 522
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 548
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 549,
                          "end": 552
                        },
                        "optional": false,
                        "computed": false,
                        "start": 541,
                        "end": 552
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 559
                        }
                      ],
                      "optional": false,
                      "start": 541,
                      "end": 560
                    },
                    "directive": null,
                    "start": 541,
                    "end": 561
                  }
                ],
                "start": 531,
                "end": 851
              },
              "id": null,
              "generator": false,
              "start": 525,
              "end": 851
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 508,
            "end": 852
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticMessageHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 884
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 910
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 911,
                          "end": 914
                        },
                        "optional": false,
                        "computed": false,
                        "start": 903,
                        "end": 914
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "field1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 915,
                          "end": 921
                        }
                      ],
                      "optional": false,
                      "start": 903,
                      "end": 922
                    },
                    "directive": null,
                    "start": 903,
                    "end": 923
                  }
                ],
                "start": 893,
                "end": 980
              },
              "id": null,
              "generator": false,
              "start": 887,
              "end": 980
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 857,
            "end": 981
          }
        ],
        "start": 454,
        "end": 983
      },
      "abstract": false,
      "declare": false,
      "start": 442,
      "end": 983
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 983
}
```
