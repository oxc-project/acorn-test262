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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 18,
            "name": "errObj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 18,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 12,
                "end": 18,
                "typeName": {
                  "type": "Identifier",
                  "start": 12,
                  "end": 18,
                  "name": "Object",
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
            "type": "ObjectExpression",
            "start": 21,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 23,
                "end": 34,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 31,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 33,
                  "end": 34,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 89,
            "name": "goodObj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 83,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 89,
                  "name": "Object",
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
            "type": "ObjectExpression",
            "start": 92,
            "end": 139,
            "properties": [
              {
                "type": "Property",
                "start": 98,
                "end": 137,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 106,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 106,
                  "end": 137,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 107,
                      "end": 109,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": true
                    }
                  ],
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
                          "value": "",
                          "raw": "\"\""
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 220,
            "name": "errFun",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 220,
                  "name": "Function",
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
            "type": "ObjectExpression",
            "start": 223,
            "end": 225,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 259,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 271,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 274,
        "end": 277,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 278,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 288,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 289,
        "end": 317,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 295,
            "end": 315,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 302,
              "end": 315,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 306,
                  "end": 314,
                  "id": {
                    "type": "Identifier",
                    "start": 306,
                    "end": 310,
                    "name": "boom",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 313,
                    "end": 314,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 344,
            "name": "goodFundule",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 344,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 336,
                "end": 344,
                "typeName": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 344,
                  "name": "Function",
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
            "type": "Identifier",
            "start": 347,
            "end": 350,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 359,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 371,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 374,
        "end": 377,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 378,
      "end": 458,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 388,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 389,
        "end": 458,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 395,
            "end": 456,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 402,
              "end": 456,
              "id": {
                "type": "Identifier",
                "start": 411,
                "end": 416,
                "name": "apply",
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
                  "start": 417,
                  "end": 432,
                  "name": "thisArg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 424,
                    "end": 432,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 426,
                      "end": 432
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 434,
                  "end": 451,
                  "name": "argArray",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 451,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 445,
                      "end": 451
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 453,
                "end": 456,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 486,
            "name": "goodFundule2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 478,
                "end": 486,
                "typeName": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 486,
                  "name": "Function",
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
            "type": "Identifier",
            "start": 489,
            "end": 492,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 501,
      "end": 519,
      "id": {
        "type": "Identifier",
        "start": 510,
        "end": 513,
        "name": "bad",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 516,
        "end": 519,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 520,
      "end": 560,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 530,
        "name": "bad",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 531,
        "end": 560,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 537,
            "end": 558,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 544,
              "end": 558,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 548,
                  "end": 557,
                  "id": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 553,
                    "name": "apply",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 556,
                    "end": 557,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 586,
            "name": "badFundule",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 576,
              "end": 586,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 578,
                "end": 586,
                "typeName": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 586,
                  "name": "Function",
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
            "type": "Identifier",
            "start": 589,
            "end": 592,
            "name": "bad",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
