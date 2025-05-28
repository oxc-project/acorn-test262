__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 55,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 32,
                          "end": 33,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 33,
                          "end": 41,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          }
                        },
                        "accessibility": null,
                        "static": false
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 82,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 81,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 116,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 115,
          "id": {
            "type": "ObjectPattern",
            "start": 87,
            "end": 98,
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "start": 88,
                "end": 96,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 96,
                  "decorators": [],
                  "name": "rest2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 101,
            "end": 115,
            "decorators": [],
            "name": "undefinedUnion",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 165,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 164,
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 147,
                          "end": 155,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 149,
                            "end": 155
                          }
                        },
                        "accessibility": null,
                        "static": false
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 191,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 190,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 180,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 220,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 219,
          "id": {
            "type": "ObjectPattern",
            "start": 196,
            "end": 207,
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "start": 197,
                "end": 205,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 205,
                  "decorators": [],
                  "name": "rest3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 210,
            "end": 219,
            "decorators": [],
            "name": "nullUnion",
            "optional": false,
            "typeAnnotation": null
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
