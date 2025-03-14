spreadIntersection.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 200,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 47,
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 47,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 18,
                "end": 47,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 18,
                    "end": 31,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 20,
                        "end": 29,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 20,
                          "end": 21,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 21,
                          "end": 29,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 23,
                            "end": 29
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 34,
                    "end": 47,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 36,
                        "end": 45,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 36,
                          "end": 37,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 37,
                          "end": 45,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 39,
                            "end": 45
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 82,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 58,
                "end": 82,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 60,
                    "end": 70,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 63,
                        "end": 69
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 71,
                    "end": 80,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 74,
                        "end": 80
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 90,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 93,
            "end": 112,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 95,
                "end": 110,
                "argument": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 110,
                  "decorators": [],
                  "name": "intersection",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 159,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 123,
                "end": 159,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 125,
                    "end": 135,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 125,
                      "end": 126,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 126,
                      "end": 134,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 128,
                        "end": 134
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 136,
                    "end": 146,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 137,
                      "end": 145,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 139,
                        "end": 145
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 147,
                    "end": 157,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 148,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 150,
                        "end": 157
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "o2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 170,
            "end": 199,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 172,
                "end": 187,
                "argument": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 187,
                  "decorators": [],
                  "name": "intersection",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 189,
                "end": 197,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 192,
                  "end": 197,
                  "raw": "false",
                  "value": false
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
