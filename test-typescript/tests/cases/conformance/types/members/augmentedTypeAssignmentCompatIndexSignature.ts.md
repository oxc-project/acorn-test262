__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 281,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 19,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 19,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 17,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 39,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 37,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 83,
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 83,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 64,
            "end": 81,
            "parameters": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 80,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 80,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
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
        "start": 51,
        "end": 57,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 85,
      "end": 129,
      "body": {
        "type": "TSInterfaceBody",
        "start": 104,
        "end": 129,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 110,
            "end": 127,
            "parameters": [
              {
                "type": "Identifier",
                "start": 111,
                "end": 120,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 114,
                    "end": 120
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 123,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 126,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
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
        "start": 95,
        "end": 103,
        "decorators": [],
        "name": "Function",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 139,
            "end": 141,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 160,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 157,
              "end": 160,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 195,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 169,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 171,
                "end": 195,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 177,
                    "end": 193,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 178,
                        "end": 187,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 179,
                          "end": 187,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 181,
                            "end": 187
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 193,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 190,
                        "end": 193,
                        "typeName": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 193,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "decorators": [],
            "name": "o",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 255,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 231,
                "end": 255,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 237,
                    "end": 253,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 238,
                        "end": 247,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 239,
                          "end": 247,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 241,
                            "end": 247
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 248,
                      "end": 253,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 250,
                        "end": 253,
                        "typeName": {
                          "type": "Identifier",
                          "start": 250,
                          "end": 253,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
