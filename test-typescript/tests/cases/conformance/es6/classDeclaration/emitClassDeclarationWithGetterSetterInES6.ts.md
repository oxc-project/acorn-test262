__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 533,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 533,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 533,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 44,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 35,
              "name": "_name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 102,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 102,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 102,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 78,
                    "end": 96,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 95,
                      "object": {
                        "type": "ThisExpression",
                        "start": 85,
                        "end": 89
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 95,
                        "name": "_name",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 61,
                  "end": 67
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 163,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
              "name": "name2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 163,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 134,
                "end": 163,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 144,
                    "end": 157,
                    "argument": {
                      "type": "Literal",
                      "start": 151,
                      "end": 156,
                      "value": "BYE",
                      "raw": "\"BYE\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 125,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 127,
                  "end": 133
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 224,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 180,
              "end": 194,
              "value": "computedname",
              "raw": "\"computedname\""
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 224,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 224,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 208,
                    "end": 218,
                    "argument": {
                      "type": "Literal",
                      "start": 215,
                      "end": 217,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 229,
            "end": 279,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 234,
              "end": 249,
              "value": "computedname1",
              "raw": "\"computedname1\""
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 250,
              "end": 279,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 253,
                "end": 279,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 263,
                    "end": 273,
                    "argument": {
                      "type": "Literal",
                      "start": 270,
                      "end": 272,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 334,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 289,
              "end": 304,
              "value": "computedname2",
              "raw": "\"computedname2\""
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 305,
              "end": 334,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 308,
                "end": 334,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 318,
                    "end": 328,
                    "argument": {
                      "type": "Literal",
                      "start": 325,
                      "end": 327,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 377,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 345,
              "end": 360,
              "value": "computedname3",
              "raw": "\"computedname3\""
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 377,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 368,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 368,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 365,
                      "end": 368
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 370,
                "end": 377,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 382,
            "end": 422,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 387,
              "end": 402,
              "value": "computedname4",
              "raw": "\"computedname4\""
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 403,
              "end": 422,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 404,
                  "end": 413,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 405,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 407,
                      "end": 413
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 415,
                "end": 422,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 428,
            "end": 450,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 435,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 435,
              "end": 450,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 436,
                  "end": 445,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 445,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 439,
                      "end": 445
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 450,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 455,
            "end": 484,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 466,
              "end": 469,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 469,
              "end": 484,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 470,
                  "end": 479,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 473,
                      "end": 479
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 481,
                "end": 484,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 489,
            "end": 531,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 501,
              "end": 515,
              "value": "computedname",
              "raw": "\"computedname\""
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 516,
              "end": 531,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 517,
                  "end": 526,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 518,
                    "end": 526,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 520,
                      "end": 526
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 528,
                "end": 531,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
