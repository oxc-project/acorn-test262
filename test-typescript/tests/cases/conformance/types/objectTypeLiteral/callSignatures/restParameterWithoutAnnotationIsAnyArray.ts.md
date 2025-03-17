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
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 117,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 118,
          "end": 122,
          "argument": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 127,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 136,
            "end": 158,
            "id": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 149,
                "end": 153,
                "argument": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 158,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 165,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 168,
            "end": 187,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "RestElement",
                "start": 169,
                "end": 173,
                "argument": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 184,
              "end": 187,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 189,
      "end": 218,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 197,
        "end": 218,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 216,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 216,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 207,
                  "end": 211,
                  "argument": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 211,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 216,
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
      "type": "TSInterfaceDeclaration",
      "start": 220,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 231,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 232,
        "end": 268,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 238,
            "end": 245,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 239,
                "end": 243,
                "argument": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null
          },
          {
            "type": "TSMethodSignature",
            "start": 250,
            "end": 266,
            "key": {
              "type": "Identifier",
              "start": 250,
              "end": 253,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 254,
                "end": 258,
                "argument": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 307,
            "name": "a",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 284,
                        "end": 288,
                        "argument": {
                          "type": "Identifier",
                          "start": 287,
                          "end": 288,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "returnType": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 295,
                    "end": 305,
                    "key": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 298,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 299,
                        "end": 303,
                        "argument": {
                          "type": "Identifier",
                          "start": 302,
                          "end": 303,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 314,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 323,
                  "end": 326,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 326,
                  "end": 336,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 327,
                      "end": 331,
                      "argument": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 333,
                    "end": 336,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 342,
                "end": 373,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 343,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 345,
                  "end": 373,
                  "id": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 357,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 358,
                      "end": 362,
                      "argument": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 362,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 370,
                    "end": 373,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 379,
                "end": 395,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 382,
                  "end": 395,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "RestElement",
                      "start": 383,
                      "end": 387,
                      "argument": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 392,
                    "end": 395,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
