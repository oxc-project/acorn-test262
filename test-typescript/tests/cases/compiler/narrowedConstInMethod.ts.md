__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 357,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 76,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
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
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 92,
            "end": 189,
            "test": {
              "type": "BinaryExpression",
              "start": 96,
              "end": 106,
              "left": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 102,
                "end": 106,
                "value": null,
                "raw": "null"
              }
            },
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
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 142,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 142,
                          "end": 165,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [],
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
                                  "object": {
                                    "type": "Identifier",
                                    "start": 154,
                                    "end": 155,
                                    "name": "x",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 156,
                                    "end": 162,
                                    "name": "length",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 204,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 235,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
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
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 251,
            "end": 354,
            "test": {
              "type": "BinaryExpression",
              "start": 255,
              "end": 265,
              "left": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 261,
                "end": 265,
                "value": null,
                "raw": "null"
              }
            },
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
                    "id": null,
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 290,
                      "end": 347,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 304,
                          "end": 330,
                          "static": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 304,
                            "end": 307,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "method",
                          "value": {
                            "type": "FunctionExpression",
                            "start": 307,
                            "end": 330,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
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
                                    "object": {
                                      "type": "Identifier",
                                      "start": 319,
                                      "end": 320,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 321,
                                      "end": 327,
                                      "name": "length",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                }
                              ]
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
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
