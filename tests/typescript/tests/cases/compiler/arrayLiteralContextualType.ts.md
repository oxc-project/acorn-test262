__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 681,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 39,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "IAnimal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 103,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 78,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 77,
              "raw": "\"Giraffe\"",
              "value": "Giraffe"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 93,
              "decorators": [],
              "name": "neckLength",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 96,
              "end": 100,
              "raw": "\"3m\"",
              "value": "3m"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "decorators": [],
        "name": "Giraffe",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 174,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 144,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 133,
              "end": 143,
              "raw": "\"Elephant\"",
              "value": "Elephant"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 172,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 162,
              "decorators": [],
              "name": "trunkDiameter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 165,
              "end": 171,
              "raw": "\"20cm\"",
              "value": "20cm"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 119,
        "decorators": [],
        "name": "Elephant",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 212,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 207,
          "decorators": [],
          "name": "animals",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 196,
            "end": 207,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 198,
              "end": 207,
              "elementType": {
                "type": "TSTypeReference",
                "start": 198,
                "end": 205,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 205,
                  "decorators": [],
                  "name": "IAnimal",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 264,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 264,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 225,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 259,
          "decorators": [],
          "name": "animals",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 233,
            "end": 259,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 235,
              "end": 259,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 237,
                  "end": 257,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 238,
                      "end": 247,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 239,
                        "end": 247,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 241,
                          "end": 247
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 250,
                      "end": 257,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 257,
                        "decorators": [],
                        "name": "IAnimal",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 313,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 266,
        "end": 312,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 270,
            "end": 311,
            "elements": [
              {
                "type": "NewExpression",
                "start": 276,
                "end": 289,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 287,
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 295,
                "end": 309,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 307,
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 266,
          "end": 269,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 435,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 388,
        "end": 434,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 392,
            "end": 433,
            "elements": [
              {
                "type": "NewExpression",
                "start": 398,
                "end": 411,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 409,
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 417,
                "end": 431,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 429,
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 388,
          "end": 391,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 553,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 552,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 518,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 521,
            "end": 552,
            "elements": [
              {
                "type": "NewExpression",
                "start": 522,
                "end": 535,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 533,
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 537,
                "end": 551,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 549,
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 563,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 554,
        "end": 562,
        "arguments": [
          {
            "type": "Identifier",
            "start": 558,
            "end": 561,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 554,
          "end": 557,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 618,
      "end": 627,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 618,
        "end": 626,
        "arguments": [
          {
            "type": "Identifier",
            "start": 622,
            "end": 625,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 618,
          "end": 621,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
