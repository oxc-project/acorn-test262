esDecorators-classDeclaration-sourceMap.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 478,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 477,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 477,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 76,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 47,
                "end": 51,
                "expression": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 51,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 56,
                "end": 60,
                "expression": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 60,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 76,
                "body": []
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
            "start": 82,
            "end": 121,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 82,
                "end": 86,
                "expression": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 91,
                "end": 95,
                "expression": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 95,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 121,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 110,
                    "end": 119,
                    "argument": {
                      "type": "Literal",
                      "start": 117,
                      "end": 118,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 169,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 127,
                "end": 131,
                "expression": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 136,
                "end": 140,
                "expression": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 140,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 169,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 175,
            "end": 199,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 175,
                "end": 179,
                "expression": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 179,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 184,
                "end": 188,
                "expression": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 188,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 197,
              "end": 198,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AccessorProperty",
            "start": 205,
            "end": 238,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 205,
                "end": 209,
                "expression": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 209,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 214,
                "end": 218,
                "expression": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 218,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 236,
              "end": 237,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 281,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 244,
                "end": 248,
                "expression": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 248,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 253,
                "end": 257,
                "expression": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 257,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 269,
              "end": 276,
              "name": "method"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 276,
              "end": 281,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 279,
                "end": 281,
                "body": []
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
            "start": 287,
            "end": 334,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 287,
                "end": 291,
                "expression": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 291,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 296,
                "end": 300,
                "expression": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 300,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 316,
              "end": 318,
              "name": "x"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 334,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 334,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 323,
                    "end": 332,
                    "argument": {
                      "type": "Literal",
                      "start": 330,
                      "end": 331,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 390,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 340,
                "end": 344,
                "expression": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 344,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 349,
                "end": 353,
                "expression": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 353,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 369,
              "end": 371,
              "name": "x"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 371,
              "end": 390,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 390,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 372,
                  "end": 385,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 385,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 396,
            "end": 428,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 396,
                "end": 400,
                "expression": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 400,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 405,
                "end": 409,
                "expression": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 409,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 421,
              "end": 423,
              "name": "y"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 426,
              "end": 427,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "AccessorProperty",
            "start": 434,
            "end": 475,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 434,
                "end": 438,
                "expression": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 438,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              },
              {
                "type": "Decorator",
                "start": 443,
                "end": 447,
                "expression": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 447,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 468,
              "end": 470,
              "name": "z"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 473,
              "end": 474,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 23,
          "end": 27,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        },
        {
          "type": "Decorator",
          "start": 28,
          "end": 32,
          "expression": {
            "type": "Identifier",
            "start": 29,
            "end": 32,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
