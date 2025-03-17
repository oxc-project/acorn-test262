__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 55,
            "name": "undefinedUnion",
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
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 81,
            "name": "rest2",
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
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 87,
            "end": 98,
            "properties": [
              {
                "type": "RestElement",
                "start": 88,
                "end": 96,
                "argument": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 96,
                  "name": "rest2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 101,
            "end": 115,
            "name": "undefinedUnion",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 164,
            "name": "nullUnion",
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
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 190,
            "name": "rest3",
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
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 196,
            "end": 207,
            "properties": [
              {
                "type": "RestElement",
                "start": 197,
                "end": 205,
                "argument": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 205,
                  "name": "rest3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 210,
            "end": 219,
            "name": "nullUnion",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
