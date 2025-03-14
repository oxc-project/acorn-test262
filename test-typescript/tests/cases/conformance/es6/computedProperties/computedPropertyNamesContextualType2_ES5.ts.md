computedPropertyNamesContextualType2_ES5.ts
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
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 49,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 31,
                "end": 49,
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
            }
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
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 108,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 87,
                "end": 108,
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 113,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 193,
          "definite": false,
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
                  "optional": false
                }
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
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 131,
                  "end": 137,
                  "argument": {
                    "type": "Literal",
                    "start": 132,
                    "end": 137,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 138,
                  "end": 162,
                  "async": false,
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
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 152,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 153,
                            "end": 159,
                            "decorators": [],
                            "name": "length",
                            "optional": false
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
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 168,
                "end": 191,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 169,
                  "end": 175,
                  "argument": {
                    "type": "Literal",
                    "start": 170,
                    "end": 175,
                    "raw": "\"bar\"",
                    "value": "bar"
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 178,
                  "end": 191,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 183,
                    "end": 191,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 191,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
