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
            "name": "errObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 18
                },
                "typeArguments": null,
                "start": 12,
                "end": 18
              },
              "start": 10,
              "end": 18
            },
            "start": 4,
            "end": 18
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 31
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 33,
                  "end": 34
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 23,
                "end": 34
              }
            ],
            "start": 21,
            "end": 36
          },
          "definite": false,
          "start": 4,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
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
            "name": "goodObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 89
                },
                "typeArguments": null,
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "start": 74,
            "end": 89
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 106
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
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 109
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 128,
                          "end": 130
                        },
                        "start": 121,
                        "end": 131
                      }
                    ],
                    "start": 111,
                    "end": 137
                  },
                  "expression": false,
                  "start": 106,
                  "end": 137
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 98,
                "end": 137
              }
            ],
            "start": 92,
            "end": 139
          },
          "definite": false,
          "start": 74,
          "end": 139
        }
      ],
      "declare": false,
      "start": 70,
      "end": 140
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
            "name": "errFun",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 220
                },
                "typeArguments": null,
                "start": 212,
                "end": 220
              },
              "start": 210,
              "end": 220
            },
            "start": 204,
            "end": 220
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 223,
            "end": 225
          },
          "definite": false,
          "start": 204,
          "end": 225
        }
      ],
      "declare": false,
      "start": 200,
      "end": 226
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 271
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 274,
        "end": 277
      },
      "expression": false,
      "start": 259,
      "end": 277
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 291
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boom",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 309,
                    "end": 313
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 316,
                    "end": 317
                  },
                  "definite": false,
                  "start": 309,
                  "end": 317
                }
              ],
              "declare": false,
              "start": 305,
              "end": 318
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 298,
            "end": 318
          }
        ],
        "start": 292,
        "end": 320
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 278,
      "end": 320
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
            "name": "goodFundule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "typeArguments": null,
                "start": 339,
                "end": 347
              },
              "start": 337,
              "end": 347
            },
            "start": 326,
            "end": 347
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 353
          },
          "definite": false,
          "start": 326,
          "end": 353
        }
      ],
      "declare": false,
      "start": 322,
      "end": 354
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 374
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 377,
        "end": 380
      },
      "expression": false,
      "start": 362,
      "end": 380
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 394
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "apply",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 422
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 432,
                      "end": 438
                    },
                    "start": 430,
                    "end": 438
                  },
                  "start": 423,
                  "end": 438
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "argArray",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 451,
                      "end": 457
                    },
                    "start": 449,
                    "end": 457
                  },
                  "start": 440,
                  "end": 457
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 459,
                "end": 462
              },
              "expression": false,
              "start": 408,
              "end": 462
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 401,
            "end": 462
          }
        ],
        "start": 395,
        "end": 464
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 381,
      "end": 464
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
            "name": "goodFundule2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 492
                },
                "typeArguments": null,
                "start": 484,
                "end": 492
              },
              "start": 482,
              "end": 492
            },
            "start": 470,
            "end": 492
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 498
          },
          "definite": false,
          "start": 470,
          "end": 498
        }
      ],
      "declare": false,
      "start": 466,
      "end": 499
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 519
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 522,
        "end": 525
      },
      "expression": false,
      "start": 507,
      "end": 525
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bad",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 539
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "apply",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 562
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 565,
                    "end": 566
                  },
                  "definite": false,
                  "start": 557,
                  "end": 566
                }
              ],
              "declare": false,
              "start": 553,
              "end": 567
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 546,
            "end": 567
          }
        ],
        "start": 540,
        "end": 569
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 526,
      "end": 569
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
            "name": "badFundule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 595
                },
                "typeArguments": null,
                "start": 587,
                "end": 595
              },
              "start": 585,
              "end": 595
            },
            "start": 575,
            "end": 595
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "bad",
            "optional": false,
            "typeAnnotation": null,
            "start": 598,
            "end": 601
          },
          "definite": false,
          "start": 575,
          "end": 601
        }
      ],
      "declare": false,
      "start": 571,
      "end": 602
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 611
}
```
