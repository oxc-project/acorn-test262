__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 225,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 18,
              "end": 22
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 39,
              "end": 43
            }
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 157,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 61,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 157,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 157,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 126,
                    "end": 151,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 126,
                      "end": 150,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 129,
                        "decorators": [],
                        "name": "zzz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 132,
                        "end": 150,
                        "async": false,
                        "body": {
                          "type": "ThisExpression",
                          "start": 146,
                          "end": 150
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "AssignmentPattern",
                            "start": 133,
                            "end": 141,
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "start": 133,
                              "end": 134,
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "right": {
                              "type": "ThisExpression",
                              "start": 137,
                              "end": 141
                            },
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 62,
                  "end": 77,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 69,
                    "end": 77,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "ThisExpression",
                      "start": 73,
                      "end": 77
                    },
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 79,
                  "end": 88,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 81,
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 84,
                    "end": 88
                  },
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 90,
                  "end": 114,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 93,
                    "decorators": [],
                    "name": "zzz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 96,
                    "end": 114,
                    "async": false,
                    "body": {
                      "type": "ThisExpression",
                      "start": 110,
                      "end": 114
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 97,
                        "end": 105,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "right": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 187,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
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
              "start": 166,
              "end": 187,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 187,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 180,
                    "end": 185,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 180,
                      "end": 184,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 182,
                        "decorators": [],
                        "name": "zz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "x",
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
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 167,
                  "end": 176,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 167,
                    "end": 169,
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 172,
                    "end": 176
                  },
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 192,
            "end": 223,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 202,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 223,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 223,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 216,
                    "end": 221,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 216,
                      "end": 220,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 218,
                        "decorators": [],
                        "name": "zz",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "y",
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
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 203,
                  "end": 212,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 205,
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "start": 208,
                    "end": 212
                  },
                  "typeAnnotation": null
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
