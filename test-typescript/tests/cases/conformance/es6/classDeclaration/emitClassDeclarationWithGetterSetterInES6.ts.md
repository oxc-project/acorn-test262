__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 517,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 517,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 517,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "_name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 86,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 86,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 80,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 69,
                      "end": 79,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 69,
                        "end": 73
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 79,
                        "decorators": [],
                        "name": "_name",
                        "optional": false,
                        "typeAnnotation": null
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
                "start": 43,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 45,
                  "end": 51
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 107,
              "decorators": [],
              "name": "name2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 147,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 147,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 128,
                    "end": 141,
                    "argument": {
                      "type": "Literal",
                      "start": 135,
                      "end": 140,
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
                "start": 109,
                "end": 117,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 111,
                  "end": 117
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 208,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 164,
              "end": 178,
              "raw": "\"computedname\"",
              "value": "computedname"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 208,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 182,
                "end": 208,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 192,
                    "end": 202,
                    "argument": {
                      "type": "Literal",
                      "start": 199,
                      "end": 201,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 263,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 218,
              "end": 233,
              "raw": "\"computedname1\"",
              "value": "computedname1"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 234,
              "end": 263,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 237,
                "end": 263,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 247,
                    "end": 257,
                    "argument": {
                      "type": "Literal",
                      "start": 254,
                      "end": 256,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 318,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 273,
              "end": 288,
              "raw": "\"computedname2\"",
              "value": "computedname2"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 318,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 292,
                "end": 318,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 302,
                    "end": 312,
                    "argument": {
                      "type": "Literal",
                      "start": 309,
                      "end": 311,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 361,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 329,
              "end": 344,
              "raw": "\"computedname3\"",
              "value": "computedname3"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 361,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 354,
                "end": 361,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 346,
                  "end": 352,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 347,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 349,
                      "end": 352
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 406,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 371,
              "end": 386,
              "raw": "\"computedname4\"",
              "value": "computedname4"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 387,
              "end": 406,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 399,
                "end": 406,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 388,
                  "end": 397,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 389,
                    "end": 397,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 391,
                      "end": 397
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 412,
            "end": 434,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 416,
              "end": 419,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 419,
              "end": 434,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 431,
                "end": 434,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 420,
                  "end": 429,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 421,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 423,
                      "end": 429
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 468,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 450,
              "end": 453,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 453,
              "end": 468,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 465,
                "end": 468,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 454,
                  "end": 463,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 455,
                    "end": 463,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 457,
                      "end": 463
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 473,
            "end": 515,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 485,
              "end": 499,
              "raw": "\"computedname\"",
              "value": "computedname"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 500,
              "end": 515,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 512,
                "end": 515,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 501,
                  "end": 510,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 502,
                    "end": 510,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 504,
                      "end": 510
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
