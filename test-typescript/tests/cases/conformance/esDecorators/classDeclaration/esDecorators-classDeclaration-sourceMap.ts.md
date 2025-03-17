__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 477,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 41,
        "end": 477,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 47,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 71,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 76,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 47,
                "end": 51,
                "expression": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 51,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 82,
            "end": 121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 121,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "decorators": [
              {
                "type": "Decorator",
                "start": 82,
                "end": 86,
                "expression": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 169,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 169,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 127,
                "end": 131,
                "expression": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 175,
            "end": 199,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 197,
              "end": 198,
              "value": 1,
              "raw": "1"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 175,
                "end": 179,
                "expression": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 179,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 205,
            "end": 238,
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 236,
              "end": 237,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 205,
                "end": 209,
                "expression": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 209,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          },
          {
            "type": "MethodDefinition",
            "start": 244,
            "end": 281,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 269,
              "end": 276,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 276,
              "end": 281,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 279,
                "end": 281,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 244,
                "end": 248,
                "expression": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 248,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 287,
            "end": 334,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 316,
              "end": 318,
              "name": "x"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 334,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
            "decorators": [
              {
                "type": "Decorator",
                "start": 287,
                "end": 291,
                "expression": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 291,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 340,
            "end": 390,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 369,
              "end": 371,
              "name": "x"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 371,
              "end": 390,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 372,
                  "end": 385,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 385,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 390,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 340,
                "end": 344,
                "expression": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 344,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 396,
            "end": 428,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 421,
              "end": 423,
              "name": "y"
            },
            "value": {
              "type": "Literal",
              "start": 426,
              "end": 427,
              "value": 1,
              "raw": "1"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 396,
                "end": 400,
                "expression": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 400,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "AccessorProperty",
            "start": 434,
            "end": 475,
            "key": {
              "type": "PrivateIdentifier",
              "start": 468,
              "end": 470,
              "name": "z"
            },
            "value": {
              "type": "Literal",
              "start": 473,
              "end": 474,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 434,
                "end": 438,
                "expression": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 438,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
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
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 23,
          "end": 27,
          "expression": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
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
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
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
