__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 32,
                          "end": 33
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 35,
                            "end": 41
                          },
                          "start": 33,
                          "end": 41
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 32,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 43
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 46,
                    "end": 55
                  }
                ],
                "start": 30,
                "end": 55
              },
              "start": 28,
              "end": 55
            },
            "start": 14,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 55
        }
      ],
      "declare": true,
      "start": 0,
      "end": 56
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 70,
                    "end": 79
                  }
                ],
                "start": 68,
                "end": 81
              },
              "start": 66,
              "end": 81
            },
            "start": 61,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 81
        }
      ],
      "declare": false,
      "start": 57,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 96
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 88,
                "end": 96
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 98
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefinedUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 115
          },
          "definite": false,
          "start": 87,
          "end": 115
        }
      ],
      "declare": false,
      "start": 83,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nullUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 147
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 149,
                            "end": 155
                          },
                          "start": 147,
                          "end": 155
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 146,
                        "end": 155
                      }
                    ],
                    "start": 144,
                    "end": 157
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 160,
                    "end": 164
                  }
                ],
                "start": 144,
                "end": 164
              },
              "start": 142,
              "end": 164
            },
            "start": 133,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 133,
          "end": 164
        }
      ],
      "declare": true,
      "start": 119,
      "end": 165
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
                      },
                      "start": 180,
                      "end": 188
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 179,
                    "end": 188
                  }
                ],
                "start": 177,
                "end": 190
              },
              "start": 175,
              "end": 190
            },
            "start": 170,
            "end": 190
          },
          "init": null,
          "definite": false,
          "start": 170,
          "end": 190
        }
      ],
      "declare": false,
      "start": 166,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 205
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 197,
                "end": 205
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 207
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "nullUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 219
          },
          "definite": false,
          "start": 196,
          "end": 219
        }
      ],
      "declare": false,
      "start": 192,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
