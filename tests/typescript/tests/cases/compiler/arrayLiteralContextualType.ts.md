__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IAnimal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 37
          }
        ],
        "start": 18,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Giraffe",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 54
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 65
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "Giraffe",
              "raw": "\"Giraffe\"",
              "start": 68,
              "end": 77
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 61,
            "end": 78
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "neckLength",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 93
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "3m",
              "raw": "\"3m\"",
              "start": 96,
              "end": 100
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 83,
            "end": 101
          }
        ],
        "start": 55,
        "end": 103
      },
      "abstract": false,
      "declare": false,
      "start": 41,
      "end": 103
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Elephant",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 119
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "Elephant",
              "raw": "\"Elephant\"",
              "start": 133,
              "end": 143
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 126,
            "end": 144
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "trunkDiameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 162
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "20cm",
              "raw": "\"20cm\"",
              "start": 165,
              "end": 171
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 149,
            "end": 172
          }
        ],
        "start": 120,
        "end": 174
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animals",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IAnimal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 198,
                  "end": 205
                },
                "typeArguments": null,
                "start": 198,
                "end": 205
              },
              "start": 198,
              "end": 207
            },
            "start": 196,
            "end": 207
          },
          "start": 189,
          "end": 207
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 209,
        "end": 212
      },
      "expression": false,
      "start": 176,
      "end": 212
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "animals",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 241,
                          "end": 247
                        },
                        "start": 239,
                        "end": 247
                      },
                      "start": 238,
                      "end": 247
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAnimal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 257
                      },
                      "typeArguments": null,
                      "start": 250,
                      "end": 257
                    },
                    "start": 248,
                    "end": 257
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 237,
                  "end": 257
                }
              ],
              "start": 235,
              "end": 259
            },
            "start": 233,
            "end": 259
          },
          "start": 226,
          "end": 259
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 261,
        "end": 264
      },
      "expression": false,
      "start": 213,
      "end": 264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 287
                },
                "typeArguments": null,
                "arguments": [],
                "start": 276,
                "end": 289
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 307
                },
                "typeArguments": null,
                "arguments": [],
                "start": 295,
                "end": 309
              }
            ],
            "start": 270,
            "end": 311
          }
        ],
        "optional": false,
        "start": 266,
        "end": 312
      },
      "directive": null,
      "start": 266,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 391
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 409
                },
                "typeArguments": null,
                "arguments": [],
                "start": 398,
                "end": 411
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 429
                },
                "typeArguments": null,
                "arguments": [],
                "start": 417,
                "end": 431
              }
            ],
            "start": 392,
            "end": 433
          }
        ],
        "optional": false,
        "start": 388,
        "end": 434
      },
      "directive": null,
      "start": 388,
      "end": 435
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 518
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 533
                },
                "typeArguments": null,
                "arguments": [],
                "start": 522,
                "end": 535
              },
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 549
                },
                "typeArguments": null,
                "arguments": [],
                "start": 537,
                "end": 551
              }
            ],
            "start": 521,
            "end": 552
          },
          "definite": false,
          "start": 515,
          "end": 552
        }
      ],
      "declare": false,
      "start": 511,
      "end": 553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 557
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 558,
            "end": 561
          }
        ],
        "optional": false,
        "start": 554,
        "end": 562
      },
      "directive": null,
      "start": 554,
      "end": 563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 618,
          "end": 621
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 625
          }
        ],
        "optional": false,
        "start": 618,
        "end": 626
      },
      "directive": null,
      "start": 618,
      "end": 627
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 681
}
```
