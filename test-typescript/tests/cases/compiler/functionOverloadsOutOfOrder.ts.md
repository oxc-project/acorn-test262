functionOverloadsOutOfOrder.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 146,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 45,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 25,
              "end": 45,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 35,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 27,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 38,
                  "end": 44
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 108,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 102,
                    "argument": {
                      "type": "CallExpression",
                      "start": 88,
                      "end": 101,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 88,
                        "end": 99,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 88,
                          "end": 90,
                          "decorators": [],
                          "name": "ns",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 99,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
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
                  "type": "Identifier",
                  "start": 62,
                  "end": 69,
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 66,
                      "end": 69
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 144,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 124,
              "end": 144,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 125,
                  "end": 134,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 126,
                    "end": 134,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 128,
                      "end": 134
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 143,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 137,
                  "end": 143
                }
              }
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
        "name": "d",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 148,
      "end": 294,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 156,
        "end": 294,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 220,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 173,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 173,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 183,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 193,
                    "end": 214,
                    "argument": {
                      "type": "CallExpression",
                      "start": 200,
                      "end": 213,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 200,
                        "end": 211,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 202,
                          "decorators": [],
                          "name": "ns",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 203,
                          "end": 211,
                          "decorators": [],
                          "name": "toString",
                          "optional": false
                        }
                      },
                      "optional": false
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
                  "type": "Identifier",
                  "start": 174,
                  "end": 181,
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 176,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 178,
                      "end": 181
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 256,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 236,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 236,
              "end": 256,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 237,
                  "end": 246,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 238,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 240,
                      "end": 246
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 247,
                "end": 255,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 249,
                  "end": 255
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 292,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 272,
              "end": 292,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 273,
                  "end": 282,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 276,
                      "end": 282
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 283,
                "end": 291,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 285,
                  "end": 291
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "e",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
