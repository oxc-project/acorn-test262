__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 104,
  "end": 545,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 104,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 114,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 121,
            "end": 161,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "name": "foo",
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
              "start": 131,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 133,
                "end": 161,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 143,
                    "end": 155,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 146,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 148,
                        "end": 154,
                        "typeName": {
                          "type": "Identifier",
                          "start": 148,
                          "end": 154,
                          "name": "Object",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 177,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 196,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 187,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 181,
                      "end": 187,
                      "typeName": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 187,
                        "name": "Object",
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
                "start": 189,
                "end": 196,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 200,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 213,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 222,
        "end": 226,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 243,
            "end": 283,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "name": "foo",
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
              "start": 253,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 255,
                "end": 283,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 265,
                    "end": 277,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 268,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 270,
                        "end": 276
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 289,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 300,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 300,
              "end": 337,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 301,
                  "end": 310,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 310,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 304,
                      "end": 310
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 312,
                "end": 337,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 322,
                    "end": 331,
                    "expression": {
                      "type": "CallExpression",
                      "start": 322,
                      "end": 330,
                      "callee": {
                        "type": "Super",
                        "start": 322,
                        "end": 327
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 328,
                          "end": 329,
                          "name": "x",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 341,
      "end": 545,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 355,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 364,
        "end": 368,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 545,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 378,
            "end": 418,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 388,
              "name": "foo",
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
              "start": 388,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 390,
                "end": 418,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 400,
                    "end": 412,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 403,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 403,
                      "end": 411,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 405,
                        "end": 411
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 480,
            "end": 543,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 480,
              "end": 491,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 543,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 492,
                  "end": 498,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 498,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 495,
                      "end": 498
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 500,
                "end": 543,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 510,
                    "end": 519,
                    "expression": {
                      "type": "CallExpression",
                      "start": 510,
                      "end": 518,
                      "callee": {
                        "type": "Super",
                        "start": 510,
                        "end": 515
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 528,
                    "end": 537,
                    "argument": {
                      "type": "Literal",
                      "start": 535,
                      "end": 536,
                      "value": 1,
                      "raw": "1"
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
