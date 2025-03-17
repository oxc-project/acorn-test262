__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
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
      "type": "VariableDeclaration",
      "start": 57,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 109,
            "name": "console",
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
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 87,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 88,
                        "end": 99,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 119,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 122,
            "end": 129,
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 148,
            "name": "robotA",
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
                  "name": "Robot",
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
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 185,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 166,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 166,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 168,
                "end": 183,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 173,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 175,
                  "end": 183,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "kind": "init",
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 187,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "name": "robotB",
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
                  "name": "Robot",
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
          "init": {
            "type": "ObjectExpression",
            "start": 207,
            "end": 245,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 224,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 215,
                  "end": 224,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 226,
                "end": 243,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 231,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 233,
                  "end": 243,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                "kind": "init",
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 247,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 288,
          "id": {
            "type": "ObjectPattern",
            "start": 251,
            "end": 279,
            "properties": [
              {
                "type": "Property",
                "start": 253,
                "end": 277,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 257,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 259,
                  "end": 277,
                  "left": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 264,
                    "name": "nameA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 267,
                    "end": 277,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 282,
            "end": 288,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 294,
            "end": 360,
            "properties": [
              {
                "type": "Property",
                "start": 296,
                "end": 320,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 300,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 302,
                  "end": 320,
                  "left": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 307,
                    "name": "nameB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 310,
                    "end": 320,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 322,
                "end": 358,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 327,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 329,
                  "end": 358,
                  "left": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 335,
                    "name": "skillB",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 338,
                    "end": 358,
                    "value": "<skillUnspecified>",
                    "raw": "\"<skillUnspecified>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 363,
            "end": 369,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 375,
            "end": 441,
            "properties": [
              {
                "type": "Property",
                "start": 377,
                "end": 401,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 381,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 383,
                  "end": 401,
                  "left": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 388,
                    "name": "nameC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 391,
                    "end": 401,
                    "value": "<NoName>",
                    "raw": "\"<NoName>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 403,
                "end": 439,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 408,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 410,
                  "end": 439,
                  "left": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 416,
                    "name": "skillC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 419,
                    "end": 439,
                    "value": "<skillUnspecified>",
                    "raw": "\"<skillUnspecified>\""
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 450,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 452,
                  "end": 459,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 461,
                "end": 483,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 466,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 468,
                  "end": 483,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "kind": "init",
                "optional": false
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
      "type": "IfStatement",
      "start": 487,
      "end": 568,
      "test": {
        "type": "BinaryExpression",
        "start": 491,
        "end": 505,
        "left": {
          "type": "Identifier",
          "start": 491,
          "end": 496,
          "name": "nameA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 500,
          "end": 505,
          "name": "nameB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
              "callee": {
                "type": "MemberExpression",
                "start": 513,
                "end": 524,
                "object": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 520,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 524,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 525,
                  "end": 531,
                  "name": "skillB",
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
        ]
      },
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
              "callee": {
                "type": "MemberExpression",
                "start": 547,
                "end": 558,
                "object": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 554,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 558,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 559,
                  "end": 564,
                  "name": "nameC",
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
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
