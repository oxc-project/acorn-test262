__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 105,
  "end": 398,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 127,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 127,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 118,
          "end": 122,
          "argument": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 136,
            "end": 158,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 158,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [
              {
                "type": "RestElement",
                "start": 149,
                "end": 153,
                "argument": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 165,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 168,
            "end": 187,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 184,
              "end": 187,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 169,
                "end": 173,
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              },
              {
                "type": "RestElement",
                "start": 175,
                "end": 179,
                "argument": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 179,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 218,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 197,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 216,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 216,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 216,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 207,
                  "end": 211,
                  "argument": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
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
        "start": 195,
        "end": 196,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 220,
      "end": 268,
      "body": {
        "type": "TSInterfaceBody",
        "start": 232,
        "end": 268,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 238,
            "end": 245,
            "params": [
              {
                "type": "RestElement",
                "start": 239,
                "end": 243,
                "argument": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 250,
            "end": 266,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "RestElement",
                "start": 254,
                "end": 258,
                "argument": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              },
              {
                "type": "RestElement",
                "start": 260,
                "end": 264,
                "argument": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 231,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 307,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 307,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 275,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 277,
                "end": 307,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 283,
                    "end": 290,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 284,
                        "end": 288,
                        "argument": {
                          "type": "Identifier",
                          "start": 287,
                          "end": 288,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 295,
                    "end": 305,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 298,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 299,
                        "end": 303,
                        "argument": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 314,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 317,
            "end": 397,
            "properties": [
              {
                "type": "Property",
                "start": 323,
                "end": 336,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 326,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 326,
                  "end": 336,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 333,
                    "end": 336,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 327,
                      "end": 331,
                      "argument": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 342,
                "end": 373,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 345,
                  "end": 373,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 370,
                    "end": 373,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 357,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 358,
                      "end": 362,
                      "argument": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 362,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    },
                    {
                      "type": "RestElement",
                      "start": 364,
                      "end": 368,
                      "argument": {
                        "type": "Identifier",
                        "start": 367,
                        "end": 368,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 379,
                "end": 395,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 382,
                  "end": 395,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 392,
                    "end": 395,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 383,
                      "end": 387,
                      "argument": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
