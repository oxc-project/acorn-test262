__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 490,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 127,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 127,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 24,
            "end": 54,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 36,
              "end": 54,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 46,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 40,
                      "end": 46
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 49,
                  "end": 53
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 60,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 72,
              "end": 90,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 82,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 76,
                      "end": 82
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 89,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 85,
                  "end": 89
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 95,
            "end": 125,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 107,
              "end": 125,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 108,
                  "end": 117,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 109,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 111,
                      "end": 117
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 118,
                "end": 124,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 120,
                  "end": 124
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 163,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 147,
        "decorators": [],
        "name": "AD1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 156,
        "end": 158,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 159,
        "end": 163,
        "body": []
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 246,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 183,
        "decorators": [],
        "name": "AD2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 246,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 201,
            "end": 226,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 213,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 213,
              "end": 226,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 214,
                  "end": 219,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 215,
                    "end": 219,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 217,
                      "end": 219,
                      "literal": {
                        "type": "Literal",
                        "start": 217,
                        "end": 219,
                        "value": "",
                        "raw": "''"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 220,
                "end": 226,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 222,
                  "end": 226
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 248,
      "end": 379,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 263,
        "end": 266,
        "decorators": [],
        "name": "AD3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 275,
        "end": 277,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 278,
        "end": 379,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 313,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 296,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 296,
              "end": 313,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 297,
                  "end": 302,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 298,
                    "end": 302,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 300,
                      "end": 302,
                      "literal": {
                        "type": "Literal",
                        "start": 300,
                        "end": 302,
                        "value": "",
                        "raw": "''"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 303,
                "end": 309,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 305,
                  "end": 309
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 310,
                "end": 313,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 336,
            "end": 357,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 348,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 348,
              "end": 357,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 350,
                "end": 356,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 352,
                  "end": 356
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 362,
            "end": 377,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 365,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 365,
              "end": 377,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 367,
                "end": 373,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 369,
                  "end": 373
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 374,
                "end": 377,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 381,
      "end": 490,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 387,
        "end": 389,
        "decorators": [],
        "name": "D4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 398,
        "end": 400,
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 401,
        "end": 490,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 407,
            "end": 435,
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
              "end": 435,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 420,
                  "end": 425,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 421,
                    "end": 425,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 423,
                      "end": 425,
                      "literal": {
                        "type": "Literal",
                        "start": 423,
                        "end": 425,
                        "value": "",
                        "raw": "''"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 426,
                "end": 432,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 428,
                  "end": 432
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 433,
                "end": 435,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 440,
            "end": 468,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 449,
              "end": 452,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 452,
              "end": 468,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 453,
                  "end": 458,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 454,
                    "end": 458,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 456,
                      "end": 458,
                      "literal": {
                        "type": "Literal",
                        "start": 456,
                        "end": 458,
                        "value": "",
                        "raw": "''"
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 459,
                "end": 465,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 461,
                  "end": 465
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 466,
                "end": 468,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": true,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 473,
            "end": 488,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 473,
              "end": 476,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 476,
              "end": 488,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 478,
                "end": 484,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 480,
                  "end": 484
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 485,
                "end": 488,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
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
