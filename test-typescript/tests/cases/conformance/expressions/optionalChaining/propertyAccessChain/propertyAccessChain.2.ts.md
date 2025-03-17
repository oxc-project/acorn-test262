__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 43,
            "name": "o1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 43,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 18,
                "end": 43,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 30,
                    "end": 43,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 32,
                        "end": 41,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 51,
      "expression": {
        "type": "ChainExpression",
        "start": 45,
        "end": 50,
        "expression": {
          "type": "MemberExpression",
          "start": 45,
          "end": 50,
          "object": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 103,
            "name": "o2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 103,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 71,
                "end": 103,
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 71,
                    "end": 80
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 83,
                    "end": 103,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 85,
                        "end": 101,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 86,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 88,
                            "end": 101,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 90,
                                "end": 99,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 90,
                                  "end": 91,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 91,
                                  "end": 99,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 93,
                                    "end": 99
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 113,
      "expression": {
        "type": "ChainExpression",
        "start": 105,
        "end": 112,
        "expression": {
          "type": "MemberExpression",
          "start": 105,
          "end": 112,
          "object": {
            "type": "MemberExpression",
            "start": 105,
            "end": 110,
            "object": {
              "type": "Identifier",
              "start": 105,
              "end": 107,
              "name": "o2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true
          },
          "property": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 165,
            "name": "o3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 133,
                "end": 165,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 135,
                    "end": 163,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 138,
                        "end": 163,
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 138,
                            "end": 147
                          },
                          {
                            "type": "TSTypeLiteral",
                            "start": 150,
                            "end": 163,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 152,
                                "end": 161,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 152,
                                  "end": 153,
                                  "name": "c",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 153,
                                  "end": 161,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 155,
                                    "end": 161
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "accessibility": null,
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 175,
      "expression": {
        "type": "ChainExpression",
        "start": 167,
        "end": 174,
        "expression": {
          "type": "MemberExpression",
          "start": 167,
          "end": 174,
          "object": {
            "type": "MemberExpression",
            "start": 167,
            "end": 171,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "name": "o3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 173,
            "end": 174,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": true
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
