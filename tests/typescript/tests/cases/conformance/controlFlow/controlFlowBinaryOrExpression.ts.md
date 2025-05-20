__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 714,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 32,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 7,
                "end": 32,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 34,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 51,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 51,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
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
      "type": "ExpressionStatement",
      "start": 54,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 54,
        "end": 73,
        "operator": "||",
        "left": {
          "type": "AssignmentExpression",
          "start": 55,
          "end": 61,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 59,
            "end": 61,
            "raw": "\"\"",
            "value": ""
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 67,
          "end": 72,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 71,
            "end": 72,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 105,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 98,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 102,
          "end": 104,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "LogicalExpression",
        "start": 106,
        "end": 121,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 106,
          "end": 110,
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 115,
          "end": 120,
          "operator": "=",
          "left": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 119,
            "end": 120,
            "raw": "0",
            "value": 0
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 125,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 195,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 153,
        "end": 195,
        "body": {
          "type": "TSInterfaceBody",
          "start": 172,
          "end": 195,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 178,
              "end": 193,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 178,
                "end": 184,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 184,
                "end": 192,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 163,
          "end": 171,
          "decorators": [],
          "name": "NodeList",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 197,
      "end": 252,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 204,
        "end": 252,
        "body": {
          "type": "TSInterfaceBody",
          "start": 229,
          "end": 252,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 235,
              "end": 250,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 235,
                "end": 241,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 241,
                "end": 249,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 243,
                  "end": 249
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 214,
          "end": 228,
          "decorators": [],
          "name": "HTMLCollection",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 254,
      "end": 321,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 281,
        "decorators": [],
        "name": "isNodeList",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 282,
          "end": 296,
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 291,
            "end": 296,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 293,
              "end": 296
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 297,
        "end": 320,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 299,
          "end": 320,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 299,
            "end": 308,
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 320,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 312,
              "end": 320,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 312,
                "end": 320,
                "decorators": [],
                "name": "NodeList",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 322,
      "end": 401,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 355,
        "decorators": [],
        "name": "isHTMLCollection",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 356,
          "end": 370,
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 365,
            "end": 370,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 367,
              "end": 370
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 371,
        "end": 400,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 373,
          "end": 400,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 373,
            "end": 382,
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 386,
            "end": 400,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 386,
              "end": 400,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 386,
                "end": 400,
                "decorators": [],
                "name": "HTMLCollection",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 403,
      "end": 466,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 423,
        "decorators": [],
        "name": "EventTargetLike",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 426,
        "end": 465,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 426,
            "end": 437,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 427,
                "end": 436,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 428,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 428,
                  "end": 436,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 430,
                    "end": 436
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 440,
            "end": 454,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 440,
              "end": 454,
              "decorators": [],
              "name": "HTMLCollection",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 457,
            "end": 465,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 457,
              "end": 465,
              "decorators": [],
              "name": "NodeList",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 472,
          "end": 515,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 472,
            "end": 498,
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 481,
              "end": 498,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 483,
                "end": 498,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 498,
                  "decorators": [],
                  "name": "EventTargetLike",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 501,
            "end": 515,
            "expression": {
              "type": "Identifier",
              "start": 506,
              "end": 515,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 502,
              "end": 505
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 517,
      "end": 569,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 544,
        "end": 569,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 550,
            "end": 567,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 550,
              "end": 566,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 550,
                "end": 559,
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 560,
                "end": 566,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 521,
        "end": 542,
        "arguments": [
          {
            "type": "Identifier",
            "start": 532,
            "end": 541,
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 521,
          "end": 531,
          "decorators": [],
          "name": "isNodeList",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 571,
      "end": 629,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 604,
        "end": 629,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 610,
            "end": 627,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 610,
              "end": 626,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 610,
                "end": 619,
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 620,
                "end": 626,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 575,
        "end": 602,
        "arguments": [
          {
            "type": "Identifier",
            "start": 592,
            "end": 601,
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 575,
          "end": 591,
          "decorators": [],
          "name": "isHTMLCollection",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "IfStatement",
      "start": 631,
      "end": 714,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 689,
        "end": 714,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 695,
            "end": 712,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 695,
              "end": 711,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 695,
                "end": 704,
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 705,
                "end": 711,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 635,
        "end": 687,
        "operator": "||",
        "left": {
          "type": "CallExpression",
          "start": 635,
          "end": 656,
          "arguments": [
            {
              "type": "Identifier",
              "start": 646,
              "end": 655,
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 635,
            "end": 645,
            "decorators": [],
            "name": "isNodeList",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "right": {
          "type": "CallExpression",
          "start": 660,
          "end": 687,
          "arguments": [
            {
              "type": "Identifier",
              "start": 677,
              "end": 686,
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 660,
            "end": 676,
            "decorators": [],
            "name": "isHTMLCollection",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
