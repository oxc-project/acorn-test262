__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 587,
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
            "start": 20,
            "end": 49,
            "name": "matchResult",
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
                  "name": "RegExpMatchArray",
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
          {
            "type": "Identifier",
            "start": 51,
            "end": 78,
            "name": "execResult",
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
                  "name": "RegExpExecArray",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
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
                    "name": "matchResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 98,
                    "end": 99,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 107,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "matchResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 125,
                    "end": 128,
                    "value": 999,
                    "raw": "999"
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 136,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "matchResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 159,
                    "name": "index",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
                    "name": "matchResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 186,
                    "name": "input",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 193,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                      "name": "matchResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 211,
                      "end": 217,
                      "name": "groups",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 218,
                    "end": 232,
                    "value": "someVariable",
                    "raw": "\"someVariable\""
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 240,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "matchResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 264,
                    "name": "groups",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 276,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "execResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 294,
                    "end": 295,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 303,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "execResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 320,
                    "end": 323,
                    "value": 999,
                    "raw": "999"
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 331,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "execResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 353,
                    "name": "index",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
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
                    "name": "execResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 379,
                    "name": "input",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 386,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                      "name": "execResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 409,
                      "name": "groups",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 410,
                    "end": 424,
                    "value": "someVariable",
                    "raw": "\"someVariable\""
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 432,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                    "name": "execResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 455,
                    "name": "groups",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 458,
                  "end": 467,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                    "name": "Math",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 489,
                    "name": "random",
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
                        "name": "matchResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 527,
                        "name": "execResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "execResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 567,
                        "end": 578,
                        "name": "matchResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
