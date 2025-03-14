restUnion2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 55,
            "decorators": [],
            "name": "undefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 55,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 30,
                "end": 55,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 30,
                    "end": 43,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 32,
                        "end": 41,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 81,
            "decorators": [],
            "name": "rest2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 68,
                "end": 81,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 70,
                    "end": 79,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
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
      "start": 83,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 115,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 87,
            "end": 98,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "RestElement",
                "start": 88,
                "end": 96,
                "argument": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 96,
                  "decorators": [],
                  "name": "rest2",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 101,
            "end": 115,
            "decorators": [],
            "name": "undefinedUnion",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 164,
            "decorators": [],
            "name": "nullUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 164,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 144,
                "end": 164,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 144,
                    "end": 157,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 146,
                        "end": 155,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 147,
                          "end": 155,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 149,
                            "end": 155
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 160,
                    "end": 164
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 190,
            "decorators": [],
            "name": "rest3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 177,
                "end": 190,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 179,
                    "end": 188,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "n",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
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
      "start": 192,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 219,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 196,
            "end": 207,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "RestElement",
                "start": 197,
                "end": 205,
                "argument": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 205,
                  "decorators": [],
                  "name": "rest3",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 210,
            "end": 219,
            "decorators": [],
            "name": "nullUnion",
            "optional": false
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
