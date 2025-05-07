__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 602,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 18,
            "decorators": [],
            "name": "errObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 18,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 12,
                "end": 18,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 18,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 21,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 23,
                "end": 34,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 31,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 139,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 89,
            "decorators": [],
            "name": "goodObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 89,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 89,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 92,
            "end": 139,
            "properties": [
              {
                "type": "Property",
                "start": 98,
                "end": 137,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 106,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 106,
                  "end": 137,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 111,
                    "end": 137,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 121,
                        "end": 131,
                        "argument": {
                          "type": "Literal",
                          "start": 128,
                          "end": 130,
                          "raw": "\"\"",
                          "value": "",
                          "regex": null,
                          "bigint": null
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
                      "start": 107,
                      "end": 109,
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 226,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 225,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 220,
            "decorators": [],
            "name": "errFun",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 220,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 220,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 223,
            "end": 225,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 259,
      "end": 277,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 274,
        "end": 277,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 271,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 278,
      "end": 317,
      "body": {
        "type": "TSModuleBlock",
        "start": 289,
        "end": 317,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 295,
            "end": 315,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 302,
              "end": 315,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 306,
                  "end": 314,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 310,
                    "decorators": [],
                    "name": "boom",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 313,
                    "end": 314,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 288,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 350,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 344,
            "decorators": [],
            "name": "goodFundule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 344,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 344,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 344,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 347,
            "end": 350,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 359,
      "end": 377,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 374,
        "end": 377,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 371,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 378,
      "end": 458,
      "body": {
        "type": "TSModuleBlock",
        "start": 389,
        "end": 458,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 395,
            "end": 456,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 402,
              "end": 456,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 456,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 411,
                "end": 416,
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 417,
                  "end": 432,
                  "decorators": [],
                  "name": "thisArg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 424,
                    "end": 432,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 426,
                      "end": 432
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 434,
                  "end": 451,
                  "decorators": [],
                  "name": "argArray",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 451,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 445,
                      "end": 451
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 388,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 460,
      "end": 493,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 492,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 486,
            "decorators": [],
            "name": "goodFundule2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 478,
                "end": 486,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 486,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 489,
            "end": 492,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 501,
      "end": 519,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 516,
        "end": 519,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 513,
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 520,
      "end": 560,
      "body": {
        "type": "TSModuleBlock",
        "start": 531,
        "end": 560,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 537,
            "end": 558,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 544,
              "end": 558,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 548,
                  "end": 557,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 553,
                    "decorators": [],
                    "name": "apply",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 556,
                    "end": 557,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 530,
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 592,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 586,
            "decorators": [],
            "name": "badFundule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 576,
              "end": 586,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 578,
                "end": 586,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 586,
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 589,
            "end": 592,
            "decorators": [],
            "name": "bad",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
