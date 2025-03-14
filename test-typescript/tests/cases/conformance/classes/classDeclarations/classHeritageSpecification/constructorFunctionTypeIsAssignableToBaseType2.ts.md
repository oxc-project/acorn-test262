constructorFunctionTypeIsAssignableToBaseType2.ts
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 198,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 121,
            "end": 161,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 131,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                    "key": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 146,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
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
                          "decorators": [],
                          "name": "Object",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 166,
            "end": 196,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 177,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 177,
              "end": 196,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 189,
                "end": 196,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 178,
                  "end": 187,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Object",
                        "optional": false
                      }
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
        "start": 110,
        "end": 114,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 200,
      "end": 339,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 243,
            "end": 283,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                    "key": {
                      "type": "Identifier",
                      "start": 265,
                      "end": 268,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 268,
                      "end": 276,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 270,
                        "end": 276
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 289,
            "end": 337,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 289,
              "end": 300,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 300,
              "end": 337,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 328,
                          "end": 329,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 322,
                        "end": 327
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 301,
                  "end": 310,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 302,
                    "end": 310,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 304,
                      "end": 310
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
        "start": 206,
        "end": 213,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 222,
        "end": 226,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 341,
      "end": 545,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 369,
        "end": 545,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 378,
            "end": 418,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 385,
              "end": 388,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
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
                    "key": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 403,
                      "decorators": [],
                      "name": "bar",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 403,
                      "end": 411,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 405,
                        "end": 411
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 480,
            "end": 543,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 480,
              "end": 491,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 491,
              "end": 543,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 510,
                        "end": 515
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 528,
                    "end": 537,
                    "argument": {
                      "type": "Literal",
                      "start": 535,
                      "end": 536,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 492,
                  "end": 498,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 498,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 495,
                      "end": 498
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
        "start": 347,
        "end": 355,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 364,
        "end": 368,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
