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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "protec",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 30
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "bar",
              "raw": "'bar'",
              "start": 33,
              "end": 38
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 14,
            "end": 39
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privat",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 59,
              "end": 61
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 42,
            "end": 62
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "copy",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 70,
              "end": 78
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 65,
            "end": 78
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
              "start": 81,
              "end": 92
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bindCopy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 109
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 110,
                          "end": 114
                        },
                        "optional": false,
                        "computed": false,
                        "start": 101,
                        "end": 114
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        }
                      ],
                      "optional": false,
                      "start": 101,
                      "end": 120
                    },
                    "directive": null,
                    "start": 101,
                    "end": 120
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
                          "name": "bindCopy2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 134
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 125,
                        "end": 139
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        }
                      ],
                      "optional": false,
                      "start": 125,
                      "end": 145
                    },
                    "directive": null,
                    "start": 125,
                    "end": 145
                  }
                ],
                "start": 95,
                "end": 149
              },
              "expression": false,
              "start": 92,
              "end": 149
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 81,
            "end": 149
          }
        ],
        "start": 10,
        "end": 151
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 151
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bindCopy",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 180
              },
              "typeArguments": null,
              "start": 177,
              "end": 180
            },
            "start": 175,
            "end": 180
          },
          "start": 171,
          "end": 180
        }
      ],
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
                  "start": 186,
                  "end": 190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "copy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 195
                },
                "optional": false,
                "computed": false,
                "start": 186,
                "end": 195
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 198,
                  "end": 202
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "protec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 209
                },
                "optional": false,
                "computed": false,
                "start": 198,
                "end": 209
              },
              "start": 186,
              "end": 209
            },
            "directive": null,
            "start": 186,
            "end": 210
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
                  "start": 226,
                  "end": 233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 237
                },
                "optional": false,
                "computed": false,
                "start": 226,
                "end": 237
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 238,
                    "end": 242
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 249
                  },
                  "optional": false,
                  "computed": false,
                  "start": 238,
                  "end": 249
                }
              ],
              "optional": false,
              "start": 226,
              "end": 250
            },
            "directive": null,
            "start": 226,
            "end": 251
          }
        ],
        "start": 182,
        "end": 269
      },
      "expression": false,
      "start": 153,
      "end": 269
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BindingFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 291
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 304
                },
                "typeArguments": null,
                "start": 301,
                "end": 304
              },
              "start": 299,
              "end": 304
            },
            "start": 295,
            "end": 304
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 309,
            "end": 313
          },
          "start": 306,
          "end": 313
        },
        "start": 294,
        "end": 313
      },
      "declare": false,
      "start": 271,
      "end": 314
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bindCopy2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BindingFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 348
                },
                "typeArguments": null,
                "start": 333,
                "end": 348
              },
              "start": 331,
              "end": 348
            },
            "start": 322,
            "end": 348
          },
          "init": {
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
                        "start": 367,
                        "end": 371
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "copy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 372,
                        "end": 376
                      },
                      "optional": false,
                      "computed": false,
                      "start": 367,
                      "end": 376
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 379,
                        "end": 383
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 390
                      },
                      "optional": false,
                      "computed": false,
                      "start": 379,
                      "end": 390
                    },
                    "start": 367,
                    "end": 390
                  },
                  "directive": null,
                  "start": 367,
                  "end": 391
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
                        "start": 407,
                        "end": 414
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 418
                      },
                      "optional": false,
                      "computed": false,
                      "start": 407,
                      "end": 418
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 419,
                          "end": 423
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 424,
                          "end": 430
                        },
                        "optional": false,
                        "computed": false,
                        "start": 419,
                        "end": 430
                      }
                    ],
                    "optional": false,
                    "start": 407,
                    "end": 431
                  },
                  "directive": null,
                  "start": 407,
                  "end": 432
                }
              ],
              "start": 363,
              "end": 450
            },
            "expression": false,
            "start": 351,
            "end": 450
          },
          "definite": false,
          "start": 322,
          "end": 450
        }
      ],
      "declare": false,
      "start": 316,
      "end": 450
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 450
}
```
