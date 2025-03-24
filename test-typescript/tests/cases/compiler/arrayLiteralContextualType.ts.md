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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "IAnimal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 39,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 37,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 28,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 54,
        "name": "Giraffe",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 78,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 77,
              "value": "Giraffe",
              "raw": "\"Giraffe\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 101,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 93,
              "name": "neckLength",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 96,
              "end": 100,
              "value": "3m",
              "raw": "\"3m\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "type": "ClassDeclaration",
      "start": 105,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 119,
        "name": "Elephant",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 144,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 133,
              "end": 143,
              "value": "Elephant",
              "raw": "\"Elephant\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 172,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 162,
              "name": "trunkDiameter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 165,
              "end": 171,
              "value": "20cm",
              "raw": "\"20cm\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
      "start": 176,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "name": "foo",
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
          "start": 189,
          "end": 207,
          "name": "animals",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 205,
                  "name": "IAnimal",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 225,
        "name": "bar",
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
          "start": 226,
          "end": 259,
          "name": "animals",
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
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 238,
                      "end": 247,
                      "name": "n",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 239,
                        "end": 247,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 241,
                          "end": 247
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 257,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 250,
                      "end": 257,
                      "typeName": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 257,
                        "name": "IAnimal",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 264,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 266,
      "end": 313,
      "expression": {
        "type": "CallExpression",
        "start": 266,
        "end": 312,
        "callee": {
          "type": "Identifier",
          "start": 266,
          "end": 269,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "callee": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 287,
                  "name": "Giraffe",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 295,
                "end": 309,
                "callee": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 307,
                  "name": "Elephant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 388,
      "end": 435,
      "expression": {
        "type": "CallExpression",
        "start": 388,
        "end": 434,
        "callee": {
          "type": "Identifier",
          "start": 388,
          "end": 391,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "callee": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 409,
                  "name": "Giraffe",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 417,
                "end": 431,
                "callee": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 429,
                  "name": "Elephant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 518,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 533,
                  "name": "Giraffe",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "NewExpression",
                "start": 537,
                "end": 551,
                "callee": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 549,
                  "name": "Elephant",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 554,
      "end": 563,
      "expression": {
        "type": "CallExpression",
        "start": 554,
        "end": 562,
        "callee": {
          "type": "Identifier",
          "start": 554,
          "end": 557,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 558,
            "end": 561,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 618,
      "end": 627,
      "expression": {
        "type": "CallExpression",
        "start": 618,
        "end": 626,
        "callee": {
          "type": "Identifier",
          "start": 618,
          "end": 621,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 622,
            "end": 625,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
