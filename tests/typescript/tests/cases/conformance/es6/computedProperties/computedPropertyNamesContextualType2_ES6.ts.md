__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 111,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 50,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 49,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 31,
                "end": 49,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 38,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 38,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 35,
                        "end": 38
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 49,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 43,
                    "end": 49
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 74,
            "end": 109,
            "parameters": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 84,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 76,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 108,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 87,
                "end": 108,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 88,
                    "end": 97,
                    "decorators": [],
                    "name": "x",
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
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 99,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 102,
                    "end": 108
                  }
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 193,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 121,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 120,
                "end": 121,
                "typeName": {
                  "type": "Identifier",
                  "start": 120,
                  "end": 121,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 124,
            "end": 193,
            "properties": [
              {
                "type": "Property",
                "start": 130,
                "end": 162,
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "start": 131,
                  "end": 137,
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "start": 132,
                    "end": 137,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "prefix": true
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 138,
                  "end": 162,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 142,
                    "end": 162,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 144,
                        "end": 160,
                        "argument": {
                          "type": "MemberExpression",
                          "start": 151,
                          "end": 159,
                          "object": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 159,
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 168,
                "end": 191,
                "kind": "init",
                "key": {
                  "type": "UnaryExpression",
                  "start": 169,
                  "end": 175,
                  "operator": "+",
                  "argument": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "prefix": true
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 178,
                  "end": 191,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "start": 183,
                    "end": 191,
                    "object": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 191,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
