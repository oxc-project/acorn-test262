__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 386,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
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
        "end": 25,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 125,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 123,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 62,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 123,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 63,
                  "end": 79,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 73,
                        "end": 79
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 81,
                  "end": 97,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 97,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 91,
                        "end": 97
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 123,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 117,
                    "expression": {
                      "type": "CallExpression",
                      "start": 109,
                      "end": 116,
                      "callee": {
                        "type": "Super",
                        "start": 109,
                        "end": 114
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 127,
      "end": 182,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 135,
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 182,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 180,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 153,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 153,
              "end": 180,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 154,
                  "end": 170,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 170,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 162,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 164,
                        "end": 170
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 172,
                "end": 180,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 266,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 192,
        "decorators": [],
        "name": "DD",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 201,
        "end": 203,
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 204,
        "end": 266,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 210,
            "end": 264,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 221,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 221,
              "end": 264,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 222,
                  "end": 238,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 238,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 230,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 232,
                        "end": 238
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 240,
                "end": 264,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 250,
                    "end": 258,
                    "expression": {
                      "type": "CallExpression",
                      "start": 250,
                      "end": 258,
                      "callee": {
                        "type": "Super",
                        "start": 250,
                        "end": 255
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 268,
      "end": 386,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 277,
        "decorators": [],
        "name": "DDD",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 286,
        "end": 288,
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 386,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 295,
            "end": 312,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 311,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 305,
                "end": 311
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 318,
            "end": 384,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 318,
              "end": 329,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 329,
              "end": 384,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 330,
                  "end": 339,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 333,
                      "end": 339
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 341,
                "end": 384,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 351,
                    "end": 359,
                    "expression": {
                      "type": "CallExpression",
                      "start": 351,
                      "end": 359,
                      "callee": {
                        "type": "Super",
                        "start": 351,
                        "end": 356
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 368,
                    "end": 378,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 368,
                      "end": 378,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 368,
                        "end": 374,
                        "object": {
                          "type": "ThisExpression",
                          "start": 368,
                          "end": 372
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 373,
                          "end": 374,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 377,
                        "end": 378,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
