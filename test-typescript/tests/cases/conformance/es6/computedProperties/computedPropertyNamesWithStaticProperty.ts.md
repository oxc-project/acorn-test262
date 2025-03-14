__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 377,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 186,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 186,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 38,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 32,
              "decorators": [],
              "name": "staticProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 35,
              "end": 37,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 96,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 48,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 48,
                "end": 50,
                "decorators": [],
                "name": "C1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 51,
                "end": 61,
                "decorators": [],
                "name": "staticProp",
                "optional": false
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 96,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 96,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 90,
                    "argument": {
                      "type": "Literal",
                      "start": 82,
                      "end": 89,
                      "raw": "\"hello\"",
                      "value": "hello"
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
            "start": 101,
            "end": 158,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 106,
              "end": 119,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 106,
                "end": 108,
                "decorators": [],
                "name": "C1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 119,
                "decorators": [],
                "name": "staticProp",
                "optional": false
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 132,
                "end": 158,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 142,
                    "end": 152,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 146,
                        "end": 151,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 151,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "start": 121,
                  "end": 130,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 122,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 124,
                      "end": 130
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 184,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 164,
              "end": 177,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 164,
                "end": 166,
                "decorators": [],
                "name": "C1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 167,
                "end": 177,
                "decorators": [],
                "name": "staticProp",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 178,
              "end": 184,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 184,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 376,
      "expression": {
        "type": "ClassExpression",
        "start": 189,
        "end": 375,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 198,
          "end": 375,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 204,
              "end": 227,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 211,
                "end": 221,
                "decorators": [],
                "name": "staticProp",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "Literal",
                "start": 224,
                "end": 226,
                "raw": "10",
                "value": 10
              }
            },
            {
              "type": "MethodDefinition",
              "start": 232,
              "end": 285,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 237,
                "end": 250,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 239,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 250,
                  "decorators": [],
                  "name": "staticProp",
                  "optional": false
                }
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 251,
                "end": 285,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 254,
                  "end": 285,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 264,
                      "end": 279,
                      "argument": {
                        "type": "Literal",
                        "start": 271,
                        "end": 278,
                        "raw": "\"hello\"",
                        "value": "hello"
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
              "start": 290,
              "end": 347,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 295,
                "end": 308,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 297,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 298,
                  "end": 308,
                  "decorators": [],
                  "name": "staticProp",
                  "optional": false
                }
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 309,
                "end": 347,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 321,
                  "end": 347,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 331,
                      "end": 341,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 335,
                          "end": 340,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 335,
                            "end": 336,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 340,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
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
                    "start": 310,
                    "end": 319,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 311,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 313,
                        "end": 319
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "MethodDefinition",
              "start": 352,
              "end": 373,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 353,
                "end": 366,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 355,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 356,
                  "end": 366,
                  "decorators": [],
                  "name": "staticProp",
                  "optional": false
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 367,
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
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 195,
          "end": 197,
          "decorators": [],
          "name": "C2",
          "optional": false
        },
        "implements": [],
        "superClass": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
