__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSInterfaceDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "IHasGetSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 60
          },
          "typeParameters": null,
          "extends": [],
          "body": {
            "type": "TSInterfaceBody",
            "body": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 78
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 82,
                    "end": 88
                  },
                  "start": 80,
                  "end": 88
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 71,
                "end": 89
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 105
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 109,
                            "end": 115
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 118,
                            "end": 124
                          }
                        ],
                        "start": 109,
                        "end": 124
                      },
                      "start": 107,
                      "end": 124
                    },
                    "start": 106,
                    "end": 124
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 98,
                "end": 126
              }
            ],
            "start": 61,
            "end": 132
          },
          "declare": false,
          "start": 40,
          "end": 132
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
                "name": "ihgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IHasGetSet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 154,
                    "end": 164
                  },
                  "start": 152,
                  "end": 164
                },
                "start": 148,
                "end": 164
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 167,
                  "end": 171
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 175,
                  "end": 178
                },
                "start": 167,
                "end": 178
              },
              "definite": false,
              "start": 148,
              "end": 178
            }
          ],
          "declare": false,
          "start": 142,
          "end": 179
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ihgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 192
              },
              "optional": false,
              "computed": false,
              "start": 184,
              "end": 192
            },
            "right": {
              "type": "Literal",
              "value": "32",
              "raw": "\"32\"",
              "start": 195,
              "end": 199
            },
            "start": 184,
            "end": 199
          },
          "directive": null,
          "start": 184,
          "end": 200
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "r_ihgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 221,
                    "end": 227
                  },
                  "start": 219,
                  "end": 227
                },
                "start": 209,
                "end": 227
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ihgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 234
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 238
                },
                "optional": false,
                "computed": false,
                "start": 230,
                "end": 238
              },
              "definite": false,
              "start": 209,
              "end": 238
            }
          ],
          "declare": false,
          "start": 205,
          "end": 239
        }
      ],
      "start": 34,
      "end": 241
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "TSTypeAliasDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "T_HasGetSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 265
          },
          "typeParameters": null,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 285
                },
                "computed": false,
                "optional": false,
                "kind": "get",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 289,
                    "end": 295
                  },
                  "start": 287,
                  "end": 295
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 278,
                "end": 296
              },
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 312
                },
                "computed": false,
                "optional": false,
                "kind": "set",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 316,
                            "end": 322
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 325,
                            "end": 331
                          }
                        ],
                        "start": 316,
                        "end": 331
                      },
                      "start": 314,
                      "end": 331
                    },
                    "start": 313,
                    "end": 331
                  }
                ],
                "returnType": null,
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 305,
                "end": 333
              }
            ],
            "start": 268,
            "end": 339
          },
          "declare": false,
          "start": 249,
          "end": 339
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
                "name": "t_hgs",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T_HasGetSet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 373
                    },
                    "typeArguments": null,
                    "start": 362,
                    "end": 373
                  },
                  "start": 360,
                  "end": 373
                },
                "start": 355,
                "end": 373
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 376,
                  "end": 380
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 384,
                  "end": 387
                },
                "start": 376,
                "end": 387
              },
              "definite": false,
              "start": 355,
              "end": 387
            }
          ],
          "declare": false,
          "start": 349,
          "end": 388
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t_hgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 398
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 402
              },
              "optional": false,
              "computed": false,
              "start": 393,
              "end": 402
            },
            "right": {
              "type": "Literal",
              "value": "32",
              "raw": "\"32\"",
              "start": 405,
              "end": 409
            },
            "start": 393,
            "end": 409
          },
          "directive": null,
          "start": 393,
          "end": 410
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "r_t_hgs_foo",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 432,
                    "end": 438
                  },
                  "start": 430,
                  "end": 438
                },
                "start": 419,
                "end": 438
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t_hgs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 446
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 450
                },
                "optional": false,
                "computed": false,
                "start": 441,
                "end": 450
              },
              "definite": false,
              "start": 419,
              "end": 450
            }
          ],
          "declare": false,
          "start": 415,
          "end": 451
        }
      ],
      "start": 243,
      "end": 453
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 453
}
```
