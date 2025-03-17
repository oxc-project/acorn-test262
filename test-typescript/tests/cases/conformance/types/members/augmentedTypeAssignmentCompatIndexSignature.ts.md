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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 57,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 68,
                    "end": 74
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 85,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 103,
        "name": "Function",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "n",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 114,
                    "end": 120
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 131,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 136,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 139,
            "end": 141,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 148,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 160,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 157,
              "end": 160,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 195,
            "name": "v1",
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
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 179,
                          "end": 187,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 181,
                            "end": 187
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "Foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 198,
            "end": 199,
            "name": "o",
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
      "start": 223,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 255,
            "name": "v2",
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
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 239,
                          "end": 247,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 241,
                            "end": 247
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 258,
            "end": 259,
            "name": "f",
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
