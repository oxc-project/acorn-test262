__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 345,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 13,
        "decorators": [],
        "name": "En",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 14,
        "end": 28,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 23,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 25,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 45,
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 45,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 46,
            "end": 47,
            "name": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
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
          "start": 49,
          "end": 53,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 53,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 52,
              "end": 53,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 72,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 61,
            "end": 70,
            "argument": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 89,
        "decorators": [],
        "name": "verify",
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
          "start": 90,
          "end": 95,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 95,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 95,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 95,
                "decorators": [],
                "name": "En",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 345,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 103,
            "end": 343,
            "discriminant": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 124,
                "end": 167,
                "test": {
                  "type": "MemberExpression",
                  "start": 129,
                  "end": 133,
                  "object": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 131,
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 147,
                    "end": 167,
                    "argument": {
                      "type": "CallExpression",
                      "start": 154,
                      "end": 166,
                      "callee": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 160,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 160,
                        "end": 163,
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "start": 161,
                            "end": 162,
                            "literal": {
                              "type": "Literal",
                              "start": 161,
                              "end": 162,
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 176,
                "end": 222,
                "test": {
                  "type": "MemberExpression",
                  "start": 181,
                  "end": 188,
                  "object": {
                    "type": "Identifier",
                    "start": 181,
                    "end": 183,
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 184,
                    "end": 187,
                    "value": "B",
                    "raw": "\"B\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 222,
                    "argument": {
                      "type": "CallExpression",
                      "start": 209,
                      "end": 221,
                      "callee": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 215,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 215,
                        "end": 218,
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "start": 216,
                            "end": 217,
                            "literal": {
                              "type": "Literal",
                              "start": 216,
                              "end": 217,
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 219,
                          "end": 220,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 231,
                "end": 277,
                "test": {
                  "type": "MemberExpression",
                  "start": 236,
                  "end": 243,
                  "object": {
                    "type": "Identifier",
                    "start": 236,
                    "end": 238,
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "TemplateLiteral",
                    "start": 239,
                    "end": 242,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 239,
                        "end": 242,
                        "value": {
                          "raw": "C",
                          "cooked": "C"
                        },
                        "tail": true
                      }
                    ],
                    "expressions": []
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 257,
                    "end": 277,
                    "argument": {
                      "type": "CallExpression",
                      "start": 264,
                      "end": 276,
                      "callee": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 270,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 270,
                        "end": 273,
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "start": 271,
                            "end": 272,
                            "literal": {
                              "type": "Literal",
                              "start": 271,
                              "end": 272,
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 274,
                          "end": 275,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 286,
                "end": 337,
                "test": {
                  "type": "MemberExpression",
                  "start": 291,
                  "end": 303,
                  "object": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 293,
                    "decorators": [],
                    "name": "En",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 294,
                    "end": 302,
                    "value": "D",
                    "raw": "\"\\u{44}\""
                  },
                  "optional": false,
                  "computed": true
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 317,
                    "end": 337,
                    "argument": {
                      "type": "CallExpression",
                      "start": 324,
                      "end": 336,
                      "callee": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 330,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 330,
                        "end": 333,
                        "params": [
                          {
                            "type": "TSLiteralType",
                            "start": 331,
                            "end": 332,
                            "literal": {
                              "type": "Literal",
                              "start": 331,
                              "end": 332,
                              "value": 3,
                              "raw": "3"
                            }
                          }
                        ]
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 334,
                          "end": 335,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
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
