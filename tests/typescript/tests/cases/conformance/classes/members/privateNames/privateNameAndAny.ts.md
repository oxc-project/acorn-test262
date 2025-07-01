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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 14,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 21,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 26
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "baz",
              "start": 38,
              "end": 42
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 45,
              "end": 47
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 31,
            "end": 48
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "m",
              "start": 60,
              "end": 62
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
                "body": [],
                "start": 65,
                "end": 67
              },
              "expression": false,
              "start": 62,
              "end": 67
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 53,
            "end": 67
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 78
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 86,
                      "end": 89
                    },
                    "start": 84,
                    "end": 89
                  },
                  "start": 79,
                  "end": 89
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 106
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 107,
                        "end": 111
                      },
                      "optional": false,
                      "computed": false,
                      "start": 101,
                      "end": 111
                    },
                    "directive": null,
                    "start": 101,
                    "end": 112
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 132
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 133,
                          "end": 135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 127,
                        "end": 135
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 127,
                      "end": 137
                    },
                    "directive": null,
                    "start": 127,
                    "end": 138
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 152
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 153,
                        "end": 157
                      },
                      "optional": false,
                      "computed": false,
                      "start": 147,
                      "end": 157
                    },
                    "directive": null,
                    "start": 147,
                    "end": 158
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 172
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 173,
                        "end": 177
                      },
                      "optional": false,
                      "computed": false,
                      "start": 167,
                      "end": 177
                    },
                    "directive": null,
                    "start": 167,
                    "end": 178
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 201
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 202,
                          "end": 206
                        },
                        "optional": false,
                        "computed": false,
                        "start": 196,
                        "end": 206
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 196,
                      "end": 208
                    },
                    "directive": null,
                    "start": 196,
                    "end": 209
                  }
                ],
                "start": 91,
                "end": 215
              },
              "expression": false,
              "start": 78,
              "end": 215
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 72,
            "end": 215
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodU",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 227
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 235,
                      "end": 242
                    },
                    "start": 233,
                    "end": 242
                  },
                  "start": 228,
                  "end": 242
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 254,
                        "end": 259
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 260,
                        "end": 264
                      },
                      "optional": false,
                      "computed": false,
                      "start": 254,
                      "end": 264
                    },
                    "directive": null,
                    "start": 254,
                    "end": 265
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 279
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 280,
                          "end": 282
                        },
                        "optional": false,
                        "computed": false,
                        "start": 274,
                        "end": 282
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 274,
                      "end": 284
                    },
                    "directive": null,
                    "start": 274,
                    "end": 285
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 299
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 300,
                        "end": 304
                      },
                      "optional": false,
                      "computed": false,
                      "start": 294,
                      "end": 304
                    },
                    "directive": null,
                    "start": 294,
                    "end": 305
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 319
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 320,
                        "end": 324
                      },
                      "optional": false,
                      "computed": false,
                      "start": 314,
                      "end": 324
                    },
                    "directive": null,
                    "start": 314,
                    "end": 325
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 334,
                          "end": 339
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 340,
                          "end": 344
                        },
                        "optional": false,
                        "computed": false,
                        "start": 334,
                        "end": 344
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 334,
                      "end": 346
                    },
                    "directive": null,
                    "start": 334,
                    "end": 347
                  }
                ],
                "start": 244,
                "end": 353
              },
              "expression": false,
              "start": 227,
              "end": 353
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 353
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodN",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 365
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
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 373,
                      "end": 378
                    },
                    "start": 371,
                    "end": 378
                  },
                  "start": 366,
                  "end": 378
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 390,
                        "end": 395
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 396,
                        "end": 400
                      },
                      "optional": false,
                      "computed": false,
                      "start": 390,
                      "end": 400
                    },
                    "directive": null,
                    "start": 390,
                    "end": 401
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 415
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "m",
                          "start": 416,
                          "end": 418
                        },
                        "optional": false,
                        "computed": false,
                        "start": 410,
                        "end": 418
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 410,
                      "end": 420
                    },
                    "directive": null,
                    "start": 410,
                    "end": 421
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 435
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 436,
                        "end": 440
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 440
                    },
                    "directive": null,
                    "start": 430,
                    "end": 441
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 455
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "start": 456,
                        "end": 460
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 460
                    },
                    "directive": null,
                    "start": 450,
                    "end": 461
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
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 470,
                          "end": 475
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 476,
                          "end": 480
                        },
                        "optional": false,
                        "computed": false,
                        "start": 470,
                        "end": 480
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 470,
                      "end": 482
                    },
                    "directive": null,
                    "start": 470,
                    "end": 483
                  }
                ],
                "start": 380,
                "end": 489
              },
              "expression": false,
              "start": 365,
              "end": 489
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 358,
            "end": 489
          }
        ],
        "start": 8,
        "end": 491
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 491
    },
    {
      "type": "EmptyStatement",
      "start": 491,
      "end": 492
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 492
}
```
