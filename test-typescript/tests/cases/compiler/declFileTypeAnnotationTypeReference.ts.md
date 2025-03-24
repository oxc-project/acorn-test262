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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 49,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 49,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 79,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 61,
              "end": 79,
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 72,
                "end": 79,
                "body": []
              },
              "decorators": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 71,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 70,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
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
      "type": "ClassDeclaration",
      "start": 82,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 96,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
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
              "callee": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 170,
        "name": "foo2",
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
              "callee": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 216,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 225,
        "end": 229,
        "name": "foo3",
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
              "callee": {
                "type": "MemberExpression",
                "start": 254,
                "end": 257,
                "object": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 255,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 257,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
        "name": "foo4",
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
              "callee": {
                "type": "MemberExpression",
                "start": 296,
                "end": 299,
                "object": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 297,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 299,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 343,
      "end": 401,
      "id": {
        "type": "Identifier",
        "start": 352,
        "end": 356,
        "name": "foo5",
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
              "callee": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 358,
        "end": 369,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 360,
          "end": 369,
          "typeName": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 402,
      "end": 449,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 415,
        "name": "foo6",
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
              "callee": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 489,
      "end": 551,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 502,
        "name": "foo7",
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
              "callee": {
                "type": "MemberExpression",
                "start": 535,
                "end": 538,
                "object": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 536,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 538,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 504,
        "end": 517,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 506,
          "end": 517,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 506,
            "end": 509,
            "left": {
              "type": "Identifier",
              "start": 506,
              "end": 507,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 508,
              "end": 509,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
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
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 552,
      "end": 601,
      "id": {
        "type": "Identifier",
        "start": 561,
        "end": 565,
        "name": "foo8",
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
              "callee": {
                "type": "MemberExpression",
                "start": 585,
                "end": 588,
                "object": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 586,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 588,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
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
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
