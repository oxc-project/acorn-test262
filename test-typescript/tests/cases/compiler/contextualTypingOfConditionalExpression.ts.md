__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 26,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7,
                "end": 26,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8,
                    "end": 17,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 11,
                        "end": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 26,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 22,
                    "end": 26
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 29,
            "end": 81,
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 63,
              "end": 81,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 70,
                "end": 81,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 70,
                  "end": 79,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 79,
                    "decorators": [],
                    "name": "toFixed",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 60,
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 43,
                "end": 60,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 43,
                  "end": 58,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 58,
                    "decorators": [],
                    "name": "toExponential",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "test": {
              "type": "Literal",
              "start": 29,
              "end": 33,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 112,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 112,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 98,
            "end": 110,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 101,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 113,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 151,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 137,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 140,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 129,
        "end": 130,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 152,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 170,
        "end": 190,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 188,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 214,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 214,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 200,
                "end": 214,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 201,
                    "end": 205,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 202,
                      "end": 205,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 204,
                        "end": 205,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 205,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 214,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 210,
                    "end": 214
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 217,
            "end": 251,
            "alternate": {
              "type": "ArrowFunctionExpression",
              "start": 239,
              "end": 251,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 246,
                "end": 251,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 251,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 240,
                  "end": 241,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "consequent": {
              "type": "ArrowFunctionExpression",
              "start": 224,
              "end": 236,
              "async": false,
              "body": {
                "type": "MemberExpression",
                "start": 231,
                "end": 236,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 236,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 225,
                  "end": 226,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            },
            "test": {
              "type": "Literal",
              "start": 217,
              "end": 221,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
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
