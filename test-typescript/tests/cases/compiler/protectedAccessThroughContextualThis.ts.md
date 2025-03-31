__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 450,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 151,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "name": "protec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 33,
              "end": 38,
              "value": "bar",
              "raw": "'bar'"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "protected"
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 62,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 56,
              "name": "privat",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 61,
              "value": "",
              "raw": "''"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 78,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "name": "copy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 78,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 95,
                "end": 149,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 120,
                    "expression": {
                      "type": "CallExpression",
                      "start": 101,
                      "end": 120,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 101,
                        "end": 114,
                        "object": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 109,
                          "name": "bindCopy",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 114,
                          "name": "call",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 115,
                          "end": 119
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 125,
                    "end": 145,
                    "expression": {
                      "type": "CallExpression",
                      "start": 125,
                      "end": 145,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 139,
                        "object": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 134,
                          "name": "bindCopy2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 139,
                          "name": "call",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 170,
        "name": "bindCopy",
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
          "start": 171,
          "end": 180,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 175,
            "end": 180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 180,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 180,
                "name": "Foo",
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
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 269,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 210,
            "expression": {
              "type": "AssignmentExpression",
              "start": 186,
              "end": 209,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 186,
                "end": 195,
                "object": {
                  "type": "ThisExpression",
                  "start": 186,
                  "end": 190
                },
                "property": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 195,
                  "name": "copy",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 198,
                "end": 209,
                "object": {
                  "type": "ThisExpression",
                  "start": 198,
                  "end": 202
                },
                "property": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "name": "protec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 226,
            "end": 251,
            "expression": {
              "type": "CallExpression",
              "start": 226,
              "end": 250,
              "callee": {
                "type": "MemberExpression",
                "start": 226,
                "end": 237,
                "object": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 233,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 237,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 238,
                  "end": 249,
                  "object": {
                    "type": "ThisExpression",
                    "start": 238,
                    "end": 242
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 249,
                    "name": "privat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
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
    {
      "type": "TSTypeAliasDeclaration",
      "start": 271,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 276,
        "end": 291,
        "name": "BindingFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 294,
        "end": 313,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 295,
            "end": 304,
            "name": "this",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 299,
              "end": 304,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 301,
                "end": 304,
                "typeName": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 304,
                  "name": "Foo",
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
          "start": 306,
          "end": 313,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 309,
            "end": 313
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 450,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 450,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 348,
            "name": "bindCopy2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 348,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 333,
                "end": 348,
                "typeName": {
                  "type": "Identifier",
                  "start": 333,
                  "end": 348,
                  "name": "BindingFunction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 351,
            "end": 450,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 363,
              "end": 450,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 367,
                  "end": 391,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 367,
                    "end": 390,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 367,
                      "end": 376,
                      "object": {
                        "type": "ThisExpression",
                        "start": 367,
                        "end": 371
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 376,
                        "name": "copy",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 379,
                      "end": 390,
                      "object": {
                        "type": "ThisExpression",
                        "start": 379,
                        "end": 383
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 390,
                        "name": "protec",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 407,
                  "end": 432,
                  "expression": {
                    "type": "CallExpression",
                    "start": 407,
                    "end": 431,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 407,
                      "end": 418,
                      "object": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 414,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 418,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 419,
                        "end": 430,
                        "object": {
                          "type": "ThisExpression",
                          "start": 419,
                          "end": 423
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 424,
                          "end": 430,
                          "name": "privat",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
