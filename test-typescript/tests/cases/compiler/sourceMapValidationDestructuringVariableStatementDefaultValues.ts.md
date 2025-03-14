sourceMapValidationDestructuringVariableStatementDefaultValues.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 568,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 54,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "decorators": [],
              "name": "skill",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
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
        "end": 15,
        "decorators": [],
        "name": "Robot",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 109,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 109,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 84,
                    "end": 107,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 87,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 88,
                        "end": 99,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 119,
            "decorators": [],
            "name": "hello",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 122,
            "end": 129,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 148,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 185,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 166,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 166,
                  "raw": "\"mower\"",
                  "value": "mower"
                }
              },
              {
                "type": "Property",
                "start": 168,
                "end": 183,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 173,
                  "decorators": [],
                  "name": "skill",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 175,
                  "end": 183,
                  "raw": "\"mowing\"",
                  "value": "mowing"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 245,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 204,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 207,
            "end": 245,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 224,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 215,
                  "end": 224,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                }
              },
              {
                "type": "Property",
                "start": 226,
                "end": 243,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 231,
                  "decorators": [],
                  "name": "skill",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 233,
                  "end": 243,
                  "raw": "\"trimming\"",
                  "value": "trimming"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 288,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 251,
            "end": 279,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 253,
                "end": 277,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 257,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 259,
                  "end": 277,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 264,
                    "decorators": [],
                    "name": "nameA",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 267,
                    "end": 277,
                    "raw": "\"<NoName>\"",
                    "value": "<NoName>"
                  }
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 282,
            "end": 288,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 369,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 294,
            "end": 360,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 296,
                "end": 320,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 300,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 302,
                  "end": 320,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 307,
                    "decorators": [],
                    "name": "nameB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 310,
                    "end": 320,
                    "raw": "\"<NoName>\"",
                    "value": "<NoName>"
                  }
                }
              },
              {
                "type": "Property",
                "start": 322,
                "end": 358,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 327,
                  "decorators": [],
                  "name": "skill",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 329,
                  "end": 358,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 335,
                    "decorators": [],
                    "name": "skillB",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 338,
                    "end": 358,
                    "raw": "\"<skillUnspecified>\"",
                    "value": "<skillUnspecified>"
                  }
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 363,
            "end": 369,
            "decorators": [],
            "name": "robotB",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 371,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 375,
          "end": 485,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 375,
            "end": 441,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 377,
                "end": 401,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 381,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 383,
                  "end": 401,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 388,
                    "decorators": [],
                    "name": "nameC",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 391,
                    "end": 401,
                    "raw": "\"<NoName>\"",
                    "value": "<NoName>"
                  }
                }
              },
              {
                "type": "Property",
                "start": 403,
                "end": 439,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 408,
                  "decorators": [],
                  "name": "skill",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 410,
                  "end": 439,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 416,
                    "decorators": [],
                    "name": "skillC",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 419,
                    "end": 439,
                    "raw": "\"<skillUnspecified>\"",
                    "value": "<skillUnspecified>"
                  }
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 444,
            "end": 485,
            "properties": [
              {
                "type": "Property",
                "start": 446,
                "end": 459,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 450,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 452,
                  "end": 459,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 461,
                "end": 483,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 466,
                  "decorators": [],
                  "name": "skill",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 468,
                  "end": 483,
                  "raw": "\"cutting edges\"",
                  "value": "cutting edges"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 487,
      "end": 568,
      "alternate": {
        "type": "BlockStatement",
        "start": 541,
        "end": 568,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 547,
            "end": 566,
            "expression": {
              "type": "CallExpression",
              "start": 547,
              "end": 565,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 559,
                  "end": 564,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 547,
                "end": 558,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 554,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 558,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 507,
        "end": 535,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 513,
            "end": 533,
            "expression": {
              "type": "CallExpression",
              "start": 513,
              "end": 532,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 525,
                  "end": 531,
                  "decorators": [],
                  "name": "skillB",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 513,
                "end": 524,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 520,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 524,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 491,
        "end": 505,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 491,
          "end": 496,
          "decorators": [],
          "name": "nameA",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 500,
          "end": 505,
          "decorators": [],
          "name": "nameB",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
