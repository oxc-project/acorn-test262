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
            "end": 53,
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
              "end": 52,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 31,
                "end": 52,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 32,
                    "end": 41,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 41,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 43,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
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
            "start": 58,
            "end": 90,
            "parameters": [
              {
                "type": "Identifier",
                "start": 59,
                "end": 68,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 89,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 71,
                "end": 89,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 72,
                    "end": 78,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 75,
                        "end": 78
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 80,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 83,
                    "end": 89
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
                  "type": "BinaryExpression",
                  "start": 131,
                  "end": 137,
                  "left": {
                    "type": "Literal",
                    "start": 131,
                    "end": 133,
                    "value": "",
                    "raw": "\"\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 136,
                    "end": 137,
                    "value": 0,
                    "raw": "0"
                  }
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
                  "type": "BinaryExpression",
                  "start": 169,
                  "end": 175,
                  "left": {
                    "type": "Literal",
                    "start": 169,
                    "end": 171,
                    "value": "",
                    "raw": "\"\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 174,
                    "end": 175,
                    "value": 1,
                    "raw": "1"
                  }
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
