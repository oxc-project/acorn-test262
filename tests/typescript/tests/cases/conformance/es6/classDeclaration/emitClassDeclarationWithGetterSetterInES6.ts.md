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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 517,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "_name",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 86,
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
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 86,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 69,
                        "end": 73
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 79,
                        "decorators": [],
                        "name": "_name",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 147,
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
            "value": {
              "type": "FunctionExpression",
              "start": 107,
              "end": 147,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "value": "BYE",
                      "raw": "\"BYE\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 208,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 164,
              "end": 178,
              "value": "computedname",
              "raw": "\"computedname\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 179,
              "end": 208,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 263,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 218,
              "end": 233,
              "value": "computedname1",
              "raw": "\"computedname1\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 234,
              "end": 263,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 268,
            "end": 318,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 273,
              "end": 288,
              "value": "computedname2",
              "raw": "\"computedname2\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 318,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 324,
            "end": 361,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 329,
              "end": 344,
              "value": "computedname3",
              "raw": "\"computedname3\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 345,
              "end": 361,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 354,
                "end": 361,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 406,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 371,
              "end": 386,
              "value": "computedname4",
              "raw": "\"computedname4\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 387,
              "end": 406,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 399,
                "end": 406,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 412,
            "end": 434,
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
            "value": {
              "type": "FunctionExpression",
              "start": 419,
              "end": 434,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 431,
                "end": 434,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 439,
            "end": 468,
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
            "value": {
              "type": "FunctionExpression",
              "start": 453,
              "end": 468,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 465,
                "end": 468,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 473,
            "end": 515,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 485,
              "end": 499,
              "value": "computedname",
              "raw": "\"computedname\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 500,
              "end": 515,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 512,
                "end": 515,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
