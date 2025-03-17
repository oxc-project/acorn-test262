__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 5,
  "end": 581,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 5,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 16,
        "name": "Match",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 94,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "name": "range",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 88,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 88,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 61,
                    "end": 78,
                    "argument": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 77,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 43,
                  "end": 46
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "start": 100,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 115,
        "name": "FileMatch",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 190,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 141,
              "name": "resource",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 190,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 190,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 163,
                    "end": 180,
                    "argument": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 179,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 143,
                "end": 148,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 145,
                  "end": 148
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "type": "TSTypeAliasDeclaration",
      "start": 198,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 219,
        "name": "FileMatchOrMatch",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 222,
        "end": 239,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 222,
            "end": 231,
            "typeName": {
              "type": "Identifier",
              "start": 222,
              "end": 231,
              "name": "FileMatch",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 234,
            "end": 239,
            "typeName": {
              "type": "Identifier",
              "start": 234,
              "end": 239,
              "name": "Match",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 243,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 273,
            "name": "elementA",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 273,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 273,
                  "name": "FileMatchOrMatch",
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
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 301,
            "name": "elementB",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 301,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 301,
                "typeName": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 301,
                  "name": "FileMatchOrMatch",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 304,
      "end": 580,
      "test": {
        "type": "LogicalExpression",
        "start": 308,
        "end": 370,
        "left": {
          "type": "BinaryExpression",
          "start": 308,
          "end": 337,
          "left": {
            "type": "Identifier",
            "start": 308,
            "end": 316,
            "name": "elementA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 328,
            "end": 337,
            "name": "FileMatch",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 341,
          "end": 370,
          "left": {
            "type": "Identifier",
            "start": 341,
            "end": 349,
            "name": "elementB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 361,
            "end": 370,
            "name": "FileMatch",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 372,
        "end": 451,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 378,
            "end": 411,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 382,
                "end": 410,
                "id": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 386,
                  "end": 410,
                  "object": {
                    "type": "CallExpression",
                    "start": 386,
                    "end": 405,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 386,
                      "end": 403,
                      "object": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 394,
                        "name": "elementA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 403,
                        "name": "resource",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 410,
                    "name": "path",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 416,
            "end": 449,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 448,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 424,
                  "end": 448,
                  "object": {
                    "type": "CallExpression",
                    "start": 424,
                    "end": 443,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 424,
                      "end": 441,
                      "object": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 432,
                        "name": "elementB",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 441,
                        "name": "resource",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 448,
                    "name": "path",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "IfStatement",
        "start": 457,
        "end": 580,
        "test": {
          "type": "LogicalExpression",
          "start": 461,
          "end": 515,
          "left": {
            "type": "BinaryExpression",
            "start": 461,
            "end": 486,
            "left": {
              "type": "Identifier",
              "start": 461,
              "end": 469,
              "name": "elementA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 481,
              "end": 486,
              "name": "Match",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "start": 490,
            "end": 515,
            "left": {
              "type": "Identifier",
              "start": 490,
              "end": 498,
              "name": "elementB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "instanceof",
            "right": {
              "type": "Identifier",
              "start": 510,
              "end": 515,
              "name": "Match",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        },
        "consequent": {
          "type": "BlockStatement",
          "start": 517,
          "end": 580,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 523,
              "end": 548,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 527,
                  "end": 547,
                  "id": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 531,
                    "end": 547,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 531,
                      "end": 545,
                      "object": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 539,
                        "name": "elementA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 540,
                        "end": 545,
                        "name": "range",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            {
              "type": "VariableDeclaration",
              "start": 553,
              "end": 578,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 557,
                  "end": 577,
                  "id": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 561,
                    "end": 577,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 561,
                      "end": 575,
                      "object": {
                        "type": "Identifier",
                        "start": 561,
                        "end": 569,
                        "name": "elementB",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 575,
                        "name": "range",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            }
          ]
        },
        "alternate": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
