__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 431,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "name": "Registry",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 73,
        "end": 110,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 77,
            "end": 91,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 80,
                "end": 90,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 82,
                    "end": 88,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 84,
                      "name": "a1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 88,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 86,
                        "end": 88,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 94,
            "end": 108,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 97,
                "end": 107,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 99,
                    "end": 105,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 101,
                      "name": "b1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 105,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 103,
                        "end": 105,
                        "members": []
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 113,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 123,
        "name": "Keyof",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 129,
        "end": 145,
        "types": [
          {
            "type": "TSTypeOperator",
            "start": 129,
            "end": 136,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 136,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 139,
            "end": 145
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 148,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 167,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 274,
          "name": "eventPath",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 253,
            "end": 274,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 255,
              "end": 274,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 255,
                  "end": 258,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 263,
                  "end": 267,
                  "value": {
                    "cooked": ":",
                    "raw": ":"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 272,
                  "end": 274,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 258,
                  "end": 263,
                  "typeName": {
                    "type": "Identifier",
                    "start": 258,
                    "end": 263,
                    "name": "Scope",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 267,
                  "end": 272,
                  "typeName": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 272,
                    "name": "Event",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 167,
        "end": 243,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 171,
            "end": 200,
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 176,
              "name": "Scope",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 190,
                "name": "Keyof",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 190,
                "end": 200,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 191,
                    "end": 199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 191,
                      "end": 199,
                      "name": "Registry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 204,
            "end": 240,
            "name": {
              "type": "Identifier",
              "start": 204,
              "end": 209,
              "name": "Event",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "name": "Keyof",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 223,
                "end": 240,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 224,
                    "end": 239,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 224,
                      "end": 232,
                      "typeName": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 232,
                        "name": "Registry",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 233,
                      "end": 238,
                      "typeName": {
                        "type": "Identifier",
                        "start": 233,
                        "end": 238,
                        "name": "Scope",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 275,
        "end": 281,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 277,
          "end": 281
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 295,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 372,
          "end": 384,
          "name": "scope",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 377,
            "end": 384,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 379,
              "end": 384,
              "typeName": {
                "type": "Identifier",
                "start": 379,
                "end": 384,
                "name": "Scope",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 386,
          "end": 398,
          "name": "event",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 391,
            "end": 398,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 393,
              "end": 398,
              "typeName": {
                "type": "Identifier",
                "start": 393,
                "end": 398,
                "name": "Event",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 400,
        "end": 430,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 404,
            "end": 428,
            "expression": {
              "type": "CallExpression",
              "start": 404,
              "end": 427,
              "callee": {
                "type": "Identifier",
                "start": 404,
                "end": 406,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 407,
                  "end": 426,
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 410,
                      "end": 415,
                      "name": "scope",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 419,
                      "end": 424,
                      "name": "event",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 407,
                      "end": 410,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 415,
                      "end": 419,
                      "value": {
                        "cooked": ":",
                        "raw": ":"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 424,
                      "end": 426,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 295,
        "end": 371,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 299,
            "end": 328,
            "name": {
              "type": "Identifier",
              "start": 299,
              "end": 304,
              "name": "Scope",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 313,
              "end": 328,
              "typeName": {
                "type": "Identifier",
                "start": 313,
                "end": 318,
                "name": "Keyof",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 318,
                "end": 328,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 319,
                    "end": 327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 327,
                      "name": "Registry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 368,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 337,
              "name": "Event",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 346,
              "end": 368,
              "typeName": {
                "type": "Identifier",
                "start": 346,
                "end": 351,
                "name": "Keyof",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 351,
                "end": 368,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 352,
                    "end": 367,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 352,
                      "end": 360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 352,
                        "end": 360,
                        "name": "Registry",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 361,
                      "end": 366,
                      "typeName": {
                        "type": "Identifier",
                        "start": 361,
                        "end": 366,
                        "name": "Scope",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
