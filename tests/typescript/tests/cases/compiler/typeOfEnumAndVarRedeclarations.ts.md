__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 317,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 16,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 17,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 24,
        "end": 37,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 34,
              "end": 35,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 48,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "E",
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
      "start": 49,
      "end": 120,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 56,
                "end": 119,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 58,
                    "end": 72,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 70,
                        "end": 71,
                        "typeName": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 73,
                    "end": 87,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 83,
                      "end": 86,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 85,
                        "end": 86,
                        "typeName": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 86,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 88,
                    "end": 117,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 98,
                        "end": 107,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 99,
                          "end": 107,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 101,
                            "end": 107
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 110,
                        "end": 116
                      }
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null
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
      "start": 139,
      "end": 149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "decorators": [],
            "name": "E",
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
      "start": 150,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 249,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 157,
                "end": 249,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 159,
                    "end": 173,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 169,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 171,
                        "end": 172,
                        "typeName": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 172,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 174,
                    "end": 188,
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "start": 183,
                      "end": 184,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 186,
                        "end": 187,
                        "typeName": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 189,
                    "end": 218,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 199,
                        "end": 208,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 200,
                          "end": 208,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 202,
                            "end": 208
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 217,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 211,
                        "end": 217
                      }
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 219,
                    "end": 247,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 229,
                        "end": 238,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 230,
                          "end": 238,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 232,
                            "end": 238
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 239,
                      "end": 247,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 241,
                        "end": 247
                      }
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
