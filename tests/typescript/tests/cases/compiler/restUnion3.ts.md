__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 54,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 53,
            "decorators": [],
            "name": "nullAndUndefinedUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 53,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 37,
                "end": 53,
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
      "start": 55,
      "end": 70,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 69,
            "decorators": [],
            "name": "rest4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 66,
                "end": 69,
                "members": []
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
      "start": 71,
      "end": 111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 110,
          "id": {
            "type": "ObjectPattern",
            "start": 75,
            "end": 86,
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "start": 76,
                "end": 84,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 84,
                  "decorators": [],
                  "name": "rest4",
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
            "start": 89,
            "end": 110,
            "decorators": [],
            "name": "nullAndUndefinedUnion",
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
      "start": 113,
      "end": 194,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 193,
            "decorators": [],
            "name": "unionWithIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 193,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 150,
                "end": 193,
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "start": 151,
                    "end": 180,
                    "types": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 151,
                        "end": 164,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 153,
                            "end": 162,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 153,
                              "end": 154,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 154,
                              "end": 162,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 156,
                                "end": 162
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 167,
                        "end": 180,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 169,
                            "end": 178,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 169,
                              "end": 170,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 170,
                              "end": 178,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 172,
                                "end": 178
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 184,
                    "end": 193
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
      "start": 195,
      "end": 231,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 230,
            "decorators": [],
            "name": "rest5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 206,
                "end": 230,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 208,
                    "end": 218,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 211,
                        "end": 217
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 219,
                    "end": 228,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 222,
                        "end": 228
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
      "start": 232,
      "end": 272,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 271,
          "id": {
            "type": "ObjectPattern",
            "start": 236,
            "end": 247,
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "start": 237,
                "end": 245,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 245,
                  "decorators": [],
                  "name": "rest5",
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
            "start": 250,
            "end": 271,
            "decorators": [],
            "name": "unionWithIntersection",
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
