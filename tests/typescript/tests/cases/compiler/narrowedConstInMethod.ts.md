__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 356,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 191,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 48,
        "end": 191,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 54,
            "end": 87,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 86,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 76,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 63,
                      "end": 76,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 72,
                          "end": 76
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 79,
                  "end": 86,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 84,
                    "end": 86,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 80,
                    "end": 83
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 92,
            "end": 189,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 108,
              "end": 189,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 118,
                  "end": 183,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 125,
                    "end": 182,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 139,
                        "end": 165,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 142,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 142,
                          "end": 165,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 145,
                            "end": 165,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 147,
                                "end": 163,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 154,
                                  "end": 162,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 154,
                                    "end": 155,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 156,
                                    "end": 162,
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 96,
              "end": 106,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 102,
                "end": 106,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 356,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 356,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 213,
            "end": 246,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 219,
                "end": 245,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 235,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 220,
                    "end": 235,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 222,
                      "end": 235,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 222,
                          "end": 228
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 231,
                          "end": 235
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 238,
                  "end": 245,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 243,
                    "end": 245,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 239,
                    "end": 242
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 251,
            "end": 354,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 267,
              "end": 354,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 277,
                  "end": 348,
                  "argument": {
                    "type": "ClassExpression",
                    "start": 284,
                    "end": 347,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 290,
                      "end": 347,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 304,
                          "end": 330,
                          "accessibility": null,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 304,
                            "end": 307,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 307,
                            "end": 330,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 310,
                              "end": 330,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 312,
                                  "end": 328,
                                  "argument": {
                                    "type": "MemberExpression",
                                    "start": 319,
                                    "end": 327,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 319,
                                      "end": 320,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 321,
                                      "end": 327,
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "returnType": null,
                            "typeParameters": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": null,
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 255,
              "end": 265,
              "operator": "!==",
              "left": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 261,
                "end": 265,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 204,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
