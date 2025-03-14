__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 601,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 81,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 49,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 49,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 79,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 61,
              "end": 79,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 72,
                "end": 79,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 71,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 70,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
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
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 96,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 156,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 156,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 139,
            "end": 154,
            "argument": {
              "type": "NewExpression",
              "start": 146,
              "end": 153,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 131,
          "end": 132,
          "typeName": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 173,
        "end": 196,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 179,
            "end": 194,
            "argument": {
              "type": "NewExpression",
              "start": 186,
              "end": 193,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 170,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 216,
      "end": 262,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 262,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 243,
            "end": 260,
            "argument": {
              "type": "NewExpression",
              "start": 250,
              "end": 259,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 254,
                "end": 257,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 229,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 231,
        "end": 236,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 233,
          "end": 236,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 233,
            "end": 236,
            "left": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 304,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 279,
        "end": 304,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 285,
            "end": 302,
            "argument": {
              "type": "NewExpression",
              "start": 292,
              "end": 301,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 296,
                "end": 299,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 343,
      "end": 401,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 370,
        "end": 401,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 376,
            "end": 399,
            "argument": {
              "type": "NewExpression",
              "start": 383,
              "end": 398,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 388,
                "end": 396,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 389,
                    "end": 395
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 356,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 358,
        "end": 369,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 360,
          "end": 369,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 361,
            "end": 369,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 362,
                "end": 368
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "decorators": [],
            "name": "g",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 402,
      "end": 449,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 418,
        "end": 449,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 424,
            "end": 447,
            "argument": {
              "type": "NewExpression",
              "start": 431,
              "end": 446,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 436,
                "end": 444,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 437,
                    "end": 443
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 415,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 489,
      "end": 551,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 518,
        "end": 551,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 524,
            "end": 549,
            "argument": {
              "type": "NewExpression",
              "start": 531,
              "end": 548,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 535,
                "end": 538,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 538,
                "end": 546,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 539,
                    "end": 545
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 502,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 504,
        "end": 517,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 506,
          "end": 517,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 509,
            "end": 517,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 510,
                "end": 516
              }
            ]
          },
          "typeName": {
            "type": "TSQualifiedName",
            "start": 506,
            "end": 509,
            "left": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 508,
              "end": 509,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 552,
      "end": 601,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 568,
        "end": 601,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 574,
            "end": 599,
            "argument": {
              "type": "NewExpression",
              "start": 581,
              "end": 598,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 585,
                "end": 588,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 586,
                  "decorators": [],
                  "name": "m",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 588,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                }
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 588,
                "end": 596,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 589,
                    "end": 595
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 561,
        "end": 565,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
