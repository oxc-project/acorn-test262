__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 655,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 22,
        "decorators": [],
        "name": "MyDisposable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 71,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 41,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 44,
            "end": 69,
            "key": {
              "type": "MemberExpression",
              "start": 45,
              "end": 59,
              "object": {
                "type": "Identifier",
                "start": 45,
                "end": 51,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 52,
                "end": 59,
                "decorators": [],
                "name": "dispose",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 68,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 64,
                "end": 68
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "BlockStatement",
      "start": 73,
      "end": 115,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 77,
          "end": 113,
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 83,
              "end": 112,
              "id": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ObjectExpression",
                "start": 87,
                "end": 112,
                "properties": [
                  {
                    "type": "Property",
                    "start": 89,
                    "end": 110,
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 90,
                      "end": 104,
                      "object": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 96,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 104,
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 105,
                      "end": 110,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 108,
                        "end": 110,
                        "body": []
                      },
                      "expression": false
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 117,
      "end": 169,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 121,
          "end": 167,
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 127,
              "end": 166,
              "id": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ObjectExpression",
                "start": 131,
                "end": 166,
                "properties": [
                  {
                    "type": "Property",
                    "start": 133,
                    "end": 154,
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 134,
                      "end": 148,
                      "object": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 140,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 148,
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 149,
                      "end": 154,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 152,
                        "end": 154,
                        "body": []
                      },
                      "expression": false
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 156,
                    "end": 164,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 161,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 163,
                      "end": 164,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 171,
      "end": 251,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 175,
          "end": 249,
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 181,
              "end": 248,
              "id": {
                "type": "Identifier",
                "start": 181,
                "end": 196,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 196,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 184,
                    "end": 196,
                    "typeName": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 196,
                      "decorators": [],
                      "name": "MyDisposable",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "init": {
                "type": "ObjectExpression",
                "start": 199,
                "end": 248,
                "properties": [
                  {
                    "type": "Property",
                    "start": 201,
                    "end": 222,
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 202,
                      "end": 216,
                      "object": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 208,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 216,
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 217,
                      "end": 222,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 220,
                        "end": 222,
                        "body": []
                      },
                      "expression": false
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 224,
                    "end": 232,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 229,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 231,
                      "end": 232,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 234,
                    "end": 246,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 239,
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 241,
                      "end": 246,
                      "value": "foo",
                      "raw": "\"foo\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 253,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 280,
        "decorators": [],
        "name": "MyAsyncDisposable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 281,
        "end": 343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 285,
            "end": 299,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 290,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 298,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 292,
                "end": 298
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 302,
            "end": 341,
            "key": {
              "type": "MemberExpression",
              "start": 303,
              "end": 322,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 309,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 310,
                "end": 322,
                "decorators": [],
                "name": "asyncDispose",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 327,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 334,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 334,
                  "end": 340,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 335,
                      "end": 339
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 345,
      "end": 643,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 361,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 643,
        "body": [
          {
            "type": "BlockStatement",
            "start": 368,
            "end": 431,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 374,
                "end": 427,
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 386,
                    "end": 426,
                    "id": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 387,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 390,
                      "end": 426,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 392,
                          "end": 424,
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "start": 399,
                            "end": 418,
                            "object": {
                              "type": "Identifier",
                              "start": 399,
                              "end": 405,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 406,
                              "end": 418,
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 419,
                            "end": 424,
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 422,
                              "end": 424,
                              "body": []
                            },
                            "expression": false
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          },
          {
            "type": "BlockStatement",
            "start": 435,
            "end": 508,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 441,
                "end": 504,
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 453,
                    "end": 503,
                    "id": {
                      "type": "Identifier",
                      "start": 453,
                      "end": 454,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 457,
                      "end": 503,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 459,
                          "end": 491,
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "start": 466,
                            "end": 485,
                            "object": {
                              "type": "Identifier",
                              "start": 466,
                              "end": 472,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 473,
                              "end": 485,
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 486,
                            "end": 491,
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 489,
                              "end": 491,
                              "body": []
                            },
                            "expression": false
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 493,
                          "end": 501,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 493,
                            "end": 498,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 500,
                            "end": 501,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          },
          {
            "type": "BlockStatement",
            "start": 512,
            "end": 641,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 518,
                "end": 637,
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 530,
                    "end": 636,
                    "id": {
                      "type": "Identifier",
                      "start": 530,
                      "end": 550,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 531,
                        "end": 550,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 533,
                          "end": 550,
                          "typeName": {
                            "type": "Identifier",
                            "start": 533,
                            "end": 550,
                            "decorators": [],
                            "name": "MyAsyncDisposable",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 553,
                      "end": 636,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 561,
                          "end": 593,
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "start": 568,
                            "end": 587,
                            "object": {
                              "type": "Identifier",
                              "start": 568,
                              "end": 574,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 575,
                              "end": 587,
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 588,
                            "end": 593,
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 591,
                              "end": 593,
                              "body": []
                            },
                            "expression": false
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 601,
                          "end": 609,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 601,
                            "end": 606,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 608,
                            "end": 609,
                            "value": 1,
                            "raw": "1"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 617,
                          "end": 629,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 617,
                            "end": 622,
                            "decorators": [],
                            "name": "extra",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 624,
                            "end": 629,
                            "value": "foo",
                            "raw": "\"foo\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 645,
      "end": 655,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
