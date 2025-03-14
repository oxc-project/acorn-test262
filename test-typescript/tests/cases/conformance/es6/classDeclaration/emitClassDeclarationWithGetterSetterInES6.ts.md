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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 533,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 30,
            "end": 44,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 35,
              "decorators": [],
              "name": "_name",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 102,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 57,
              "end": 102,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 85,
                        "end": 89
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 95,
                        "decorators": [],
                        "name": "_name",
                        "optional": false
                      }
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
                "start": 59,
                "end": 67,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 61,
                  "end": 67
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 107,
            "end": 163,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
              "decorators": [],
              "name": "name2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 163,
              "async": false,
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
                      "raw": "\"BYE\"",
                      "value": "BYE"
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
                "start": 125,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 127,
                  "end": 133
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 168,
            "end": 224,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 180,
              "end": 194,
              "raw": "\"computedname\"",
              "value": "computedname"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 224,
              "async": false,
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
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 229,
            "end": 279,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 234,
              "end": 249,
              "raw": "\"computedname1\"",
              "value": "computedname1"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 250,
              "end": 279,
              "async": false,
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
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 334,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 289,
              "end": 304,
              "raw": "\"computedname2\"",
              "value": "computedname2"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 305,
              "end": 334,
              "async": false,
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
                      "raw": "\"\"",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 377,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 345,
              "end": 360,
              "raw": "\"computedname3\"",
              "value": "computedname3"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 377,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 370,
                "end": 377,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 368,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 363,
                    "end": 368,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 365,
                      "end": 368
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 382,
            "end": 422,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 387,
              "end": 402,
              "raw": "\"computedname4\"",
              "value": "computedname4"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 403,
              "end": 422,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 415,
                "end": 422,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 404,
                  "end": 413,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 405,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 407,
                      "end": 413
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 428,
            "end": 450,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 435,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 435,
              "end": 450,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 447,
                "end": 450,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 436,
                  "end": 445,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 445,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 439,
                      "end": 445
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 455,
            "end": 484,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 466,
              "end": 469,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 469,
              "end": 484,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 481,
                "end": 484,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 470,
                  "end": 479,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 479,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 473,
                      "end": 479
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 489,
            "end": 531,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 501,
              "end": 515,
              "raw": "\"computedname\"",
              "value": "computedname"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 516,
              "end": 531,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 528,
                "end": 531,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 517,
                  "end": 526,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 518,
                    "end": 526,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 520,
                      "end": 526
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
