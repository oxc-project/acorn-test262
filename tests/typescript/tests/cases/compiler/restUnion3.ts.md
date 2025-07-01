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
            "name": "nullAndUndefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 37,
                    "end": 41
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 44,
                    "end": 53
                  }
                ],
                "start": 37,
                "end": 53
              },
              "start": 35,
              "end": 53
            },
            "start": 14,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 53
        }
      ],
      "declare": true,
      "start": 0,
      "end": 54
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
            "name": "rest4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 66,
                "end": 69
              },
              "start": 64,
              "end": 69
            },
            "start": 59,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 59,
          "end": 69
        }
      ],
      "declare": false,
      "start": 55,
      "end": 70
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
                  "name": "rest4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 84
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 76,
                "end": 84
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 86
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "nullAndUndefinedUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 110
          },
          "definite": false,
          "start": 75,
          "end": 110
        }
      ],
      "declare": false,
      "start": 71,
      "end": 111
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
            "name": "unionWithIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
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
                              "start": 153,
                              "end": 154
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 156,
                                "end": 162
                              },
                              "start": 154,
                              "end": 162
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 153,
                            "end": 162
                          }
                        ],
                        "start": 151,
                        "end": 164
                      },
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
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 169,
                              "end": 170
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 172,
                                "end": 178
                              },
                              "start": 170,
                              "end": 178
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 169,
                            "end": 178
                          }
                        ],
                        "start": 167,
                        "end": 180
                      }
                    ],
                    "start": 151,
                    "end": 180
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 184,
                    "end": 193
                  }
                ],
                "start": 150,
                "end": 193
              },
              "start": 148,
              "end": 193
            },
            "start": 127,
            "end": 193
          },
          "init": null,
          "definite": false,
          "start": 127,
          "end": 193
        }
      ],
      "declare": true,
      "start": 113,
      "end": 194
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
            "name": "rest5",
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
                      "start": 208,
                      "end": 209
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 211,
                        "end": 217
                      },
                      "start": 209,
                      "end": 217
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 208,
                    "end": 218
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 220
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 222,
                        "end": 228
                      },
                      "start": 220,
                      "end": 228
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 219,
                    "end": 228
                  }
                ],
                "start": 206,
                "end": 230
              },
              "start": 204,
              "end": 230
            },
            "start": 199,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 199,
          "end": 230
        }
      ],
      "declare": false,
      "start": 195,
      "end": 231
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
                  "name": "rest5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 245
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 237,
                "end": 245
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 247
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithIntersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 271
          },
          "definite": false,
          "start": 236,
          "end": 271
        }
      ],
      "declare": false,
      "start": 232,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 272
}
```
