__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 734,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 145,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 87,
            "end": 143,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 97,
              "end": 100,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 98,
                  "end": 99,
                  "name": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 105,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 104,
                    "end": 105,
                    "typeName": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 109,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 109,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 110,
              "end": 143,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 120,
                  "end": 137,
                  "argument": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 136,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 313,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 158,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 161,
        "end": 313,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 234,
            "end": 311,
            "id": {
              "type": "Identifier",
              "start": 243,
              "end": 244,
              "decorators": [],
              "name": "f",
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
                "start": 245,
                "end": 249,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 248,
                    "end": 249,
                    "typeName": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 249,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 253,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 253,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 254,
              "end": 311,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 264,
                  "end": 279,
                  "id": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 276,
                    "end": 279,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 288,
                  "end": 305,
                  "argument": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 304,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 315,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 326,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 329,
        "end": 489,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 414,
            "end": 487,
            "id": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 424,
              "end": 427,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 425,
                  "end": 426,
                  "name": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 430,
              "end": 487,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 440,
                  "end": 455,
                  "id": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 452,
                    "end": 455,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 464,
                  "end": 481,
                  "argument": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 480,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 491,
      "end": 734,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 502,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 505,
        "end": 734,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 547,
            "end": 572,
            "id": {
              "type": "Identifier",
              "start": 557,
              "end": 558,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 559,
              "end": 572,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 561,
                  "end": 570,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 562,
                    "end": 570,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 564,
                      "end": 570
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 577,
            "end": 586,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 581,
                "end": 585,
                "id": {
                  "type": "Identifier",
                  "start": 581,
                  "end": 585,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 582,
                    "end": 585,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 584,
                      "end": 585,
                      "typeName": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 585,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 591,
            "end": 600,
            "expression": {
              "type": "AssignmentExpression",
              "start": 591,
              "end": 599,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 591,
                "end": 594,
                "object": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 592,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 594,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 597,
                "end": 599,
                "value": 10,
                "raw": "10"
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 605,
            "end": 732,
            "test": {
              "type": "Literal",
              "start": 609,
              "end": 613,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 615,
              "end": 697,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 625,
                  "end": 650,
                  "id": {
                    "type": "Identifier",
                    "start": 635,
                    "end": 636,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 637,
                    "end": 650,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 639,
                        "end": 648,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 639,
                          "end": 640,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 640,
                          "end": 648,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 642,
                            "end": 648
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 659,
                  "end": 668,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 663,
                      "end": 667,
                      "id": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 667,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 664,
                          "end": 667,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 666,
                            "end": 667,
                            "typeName": {
                              "type": "Identifier",
                              "start": 666,
                              "end": 667,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 677,
                  "end": 691,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 677,
                    "end": 690,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 677,
                      "end": 680,
                      "object": {
                        "type": "Identifier",
                        "start": 677,
                        "end": 678,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 679,
                        "end": 680,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 683,
                      "end": 690,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 707,
              "end": 732,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 717,
                  "end": 726,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 717,
                    "end": 725,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 717,
                      "end": 720,
                      "object": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 718,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 719,
                        "end": 720,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 723,
                      "end": 725,
                      "value": 20,
                      "raw": "20"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
