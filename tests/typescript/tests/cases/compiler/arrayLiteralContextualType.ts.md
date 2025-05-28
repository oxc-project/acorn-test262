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
        "decorators": [],
        "name": "IAnimal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 103,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 78,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 77,
              "value": "Giraffe",
              "raw": "\"Giraffe\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 83,
            "end": 101,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 93,
              "decorators": [],
              "name": "neckLength",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 96,
              "end": 100,
              "value": "3m",
              "raw": "\"3m\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 174,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 174,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 144,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 133,
              "end": 143,
              "value": "Elephant",
              "raw": "\"Elephant\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 149,
            "end": 172,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 162,
              "decorators": [],
              "name": "trunkDiameter",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 165,
              "end": 171,
              "value": "20cm",
              "raw": "\"20cm\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 188,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 205,
                  "decorators": [],
                  "name": "IAnimal",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 209,
        "end": 212,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 225,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                        "decorators": [],
                        "name": "IAnimal",
                        "optional": false,
                        "typeAnnotation": null
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 261,
        "end": 264,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 295,
                "end": 309,
                "callee": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 307,
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          }
        ],
        "optional": false
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
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 417,
                "end": 431,
                "callee": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 429,
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 553,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 552,
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
                "callee": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 533,
                  "decorators": [],
                  "name": "Giraffe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "NewExpression",
                "start": 537,
                "end": 551,
                "callee": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 549,
                  "decorators": [],
                  "name": "Elephant",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            ]
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
