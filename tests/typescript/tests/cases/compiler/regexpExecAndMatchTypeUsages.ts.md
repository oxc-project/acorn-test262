__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 586,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 586,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 586,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
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
            "start": 20,
            "end": 49,
            "decorators": [],
            "name": "matchResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 33,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 49,
                  "decorators": [],
                  "name": "RegExpMatchArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "Identifier",
            "start": 51,
            "end": 78,
            "decorators": [],
            "name": "execResult",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 78,
                  "decorators": [],
                  "name": "RegExpExecArray",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 80,
          "end": 586,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 86,
              "end": 108,
              "expression": {
                "type": "MemberExpression",
                "start": 86,
                "end": 107,
                "object": {
                  "type": "MemberExpression",
                  "start": 86,
                  "end": 100,
                  "object": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 97,
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 98,
                    "end": 99,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 107,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 113,
              "end": 137,
              "expression": {
                "type": "MemberExpression",
                "start": 113,
                "end": 136,
                "object": {
                  "type": "MemberExpression",
                  "start": 113,
                  "end": 129,
                  "object": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 124,
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 125,
                    "end": 128,
                    "value": 999,
                    "raw": "999"
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 136,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 142,
              "end": 164,
              "expression": {
                "type": "BinaryExpression",
                "start": 142,
                "end": 163,
                "left": {
                  "type": "MemberExpression",
                  "start": 142,
                  "end": 159,
                  "object": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 153,
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 159,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 162,
                  "end": 163,
                  "value": 0,
                  "raw": "0"
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 169,
              "end": 194,
              "expression": {
                "type": "MemberExpression",
                "start": 169,
                "end": 193,
                "object": {
                  "type": "MemberExpression",
                  "start": 169,
                  "end": 186,
                  "object": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 180,
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 186,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 193,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 199,
              "end": 241,
              "expression": {
                "type": "MemberExpression",
                "start": 199,
                "end": 240,
                "object": {
                  "type": "MemberExpression",
                  "start": 199,
                  "end": 233,
                  "object": {
                    "type": "MemberExpression",
                    "start": 199,
                    "end": 217,
                    "object": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 210,
                      "decorators": [],
                      "name": "matchResult",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 217,
                      "decorators": [],
                      "name": "groups",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 218,
                    "end": 232,
                    "value": "someVariable",
                    "raw": "\"someVariable\""
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 240,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 246,
              "end": 277,
              "expression": {
                "type": "AssignmentExpression",
                "start": 246,
                "end": 276,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 246,
                  "end": 264,
                  "object": {
                    "type": "Identifier",
                    "start": 246,
                    "end": 257,
                    "decorators": [],
                    "name": "matchResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 264,
                    "decorators": [],
                    "name": "groups",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 276,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 283,
              "end": 304,
              "expression": {
                "type": "MemberExpression",
                "start": 283,
                "end": 303,
                "object": {
                  "type": "MemberExpression",
                  "start": 283,
                  "end": 296,
                  "object": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 293,
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 294,
                    "end": 295,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 303,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 309,
              "end": 332,
              "expression": {
                "type": "MemberExpression",
                "start": 309,
                "end": 331,
                "object": {
                  "type": "MemberExpression",
                  "start": 309,
                  "end": 324,
                  "object": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 319,
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 320,
                    "end": 323,
                    "value": 999,
                    "raw": "999"
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 331,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 337,
              "end": 358,
              "expression": {
                "type": "BinaryExpression",
                "start": 337,
                "end": 357,
                "left": {
                  "type": "MemberExpression",
                  "start": 337,
                  "end": 353,
                  "object": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 347,
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 353,
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 356,
                  "end": 357,
                  "value": 0,
                  "raw": "0"
                }
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 363,
              "end": 387,
              "expression": {
                "type": "MemberExpression",
                "start": 363,
                "end": 386,
                "object": {
                  "type": "MemberExpression",
                  "start": 363,
                  "end": 379,
                  "object": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 373,
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 379,
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 386,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 392,
              "end": 433,
              "expression": {
                "type": "MemberExpression",
                "start": 392,
                "end": 432,
                "object": {
                  "type": "MemberExpression",
                  "start": 392,
                  "end": 425,
                  "object": {
                    "type": "MemberExpression",
                    "start": 392,
                    "end": 409,
                    "object": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 402,
                      "decorators": [],
                      "name": "execResult",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 409,
                      "decorators": [],
                      "name": "groups",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 410,
                    "end": 424,
                    "value": "someVariable",
                    "raw": "\"someVariable\""
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 432,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 438,
              "end": 468,
              "expression": {
                "type": "AssignmentExpression",
                "start": 438,
                "end": 467,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 438,
                  "end": 455,
                  "object": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 448,
                    "decorators": [],
                    "name": "execResult",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 455,
                    "decorators": [],
                    "name": "groups",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 467,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "directive": null
            },
            {
              "type": "IfStatement",
              "start": 474,
              "end": 584,
              "test": {
                "type": "CallExpression",
                "start": 478,
                "end": 491,
                "callee": {
                  "type": "MemberExpression",
                  "start": 478,
                  "end": 489,
                  "object": {
                    "type": "Identifier",
                    "start": 478,
                    "end": 482,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 489,
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 493,
                "end": 534,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 503,
                    "end": 528,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 503,
                      "end": 527,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 503,
                        "end": 514,
                        "decorators": [],
                        "name": "matchResult",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 527,
                        "decorators": [],
                        "name": "execResult",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 544,
                "end": 584,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 554,
                    "end": 578,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 554,
                      "end": 578,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 564,
                        "decorators": [],
                        "name": "execResult",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 578,
                        "decorators": [],
                        "name": "matchResult",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
