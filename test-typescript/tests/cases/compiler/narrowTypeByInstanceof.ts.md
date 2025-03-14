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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 94,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 88,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "decorators": [],
              "name": "range",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 39,
              "end": 88,
              "async": false,
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
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 16,
        "decorators": [],
        "name": "Match",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 196,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 126,
            "end": 190,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 141,
              "decorators": [],
              "name": "resource",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 141,
              "end": 190,
              "async": false,
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
                      "decorators": [],
                      "name": "undefined",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 115,
        "decorators": [],
        "name": "FileMatch",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 198,
      "end": 240,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 219,
        "decorators": [],
        "name": "FileMatchOrMatch",
        "optional": false
      },
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
              "decorators": [],
              "name": "FileMatch",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 234,
            "end": 239,
            "typeName": {
              "type": "Identifier",
              "start": 234,
              "end": 239,
              "decorators": [],
              "name": "Match",
              "optional": false
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 273,
            "decorators": [],
            "name": "elementA",
            "optional": false,
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
                  "decorators": [],
                  "name": "FileMatchOrMatch",
                  "optional": false
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 301,
            "decorators": [],
            "name": "elementB",
            "optional": false,
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
                  "decorators": [],
                  "name": "FileMatchOrMatch",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 304,
      "end": 580,
      "alternate": {
        "type": "IfStatement",
        "start": 457,
        "end": 580,
        "alternate": null,
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 528,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 531,
                    "end": 547,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 531,
                      "end": 545,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 539,
                        "decorators": [],
                        "name": "elementA",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 540,
                        "end": 545,
                        "decorators": [],
                        "name": "range",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 561,
                    "end": 577,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 561,
                      "end": 575,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 561,
                        "end": 569,
                        "decorators": [],
                        "name": "elementB",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 575,
                        "decorators": [],
                        "name": "range",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
        },
        "test": {
          "type": "LogicalExpression",
          "start": 461,
          "end": 515,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 461,
            "end": 486,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 461,
              "end": 469,
              "decorators": [],
              "name": "elementA",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 481,
              "end": 486,
              "decorators": [],
              "name": "Match",
              "optional": false
            }
          },
          "right": {
            "type": "BinaryExpression",
            "start": 490,
            "end": 515,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 490,
              "end": 498,
              "decorators": [],
              "name": "elementB",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 510,
              "end": 515,
              "decorators": [],
              "name": "Match",
              "optional": false
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 386,
                  "end": 410,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 386,
                    "end": 405,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 386,
                      "end": 403,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 394,
                        "decorators": [],
                        "name": "elementA",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 403,
                        "decorators": [],
                        "name": "resource",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 410,
                    "decorators": [],
                    "name": "path",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 424,
                  "end": 448,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 424,
                    "end": 443,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 424,
                      "end": 441,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 432,
                        "decorators": [],
                        "name": "elementB",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 441,
                        "decorators": [],
                        "name": "resource",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 448,
                    "decorators": [],
                    "name": "path",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 308,
        "end": 370,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 308,
          "end": 337,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 308,
            "end": 316,
            "decorators": [],
            "name": "elementA",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 328,
            "end": 337,
            "decorators": [],
            "name": "FileMatch",
            "optional": false
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 341,
          "end": 370,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 341,
            "end": 349,
            "decorators": [],
            "name": "elementB",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 361,
            "end": 370,
            "decorators": [],
            "name": "FileMatch",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
