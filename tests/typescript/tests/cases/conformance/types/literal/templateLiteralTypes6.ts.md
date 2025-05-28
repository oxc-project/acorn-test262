__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 430,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "decorators": [],
        "name": "Registry",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "Keyof",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "Scope",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 190,
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Registry",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 218,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Registry",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Scope",
                        "optional": false,
                        "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 274,
          "decorators": [],
          "name": "eventPath",
          "optional": false,
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
                    "decorators": [],
                    "name": "Scope",
                    "optional": false,
                    "typeAnnotation": null
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
                    "decorators": [],
                    "name": "Event",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 275,
        "end": 281,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 277,
          "end": 281
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 430,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 295,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "Scope",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 313,
              "end": 328,
              "typeName": {
                "type": "Identifier",
                "start": 313,
                "end": 318,
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Registry",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 346,
              "end": 368,
              "typeName": {
                "type": "Identifier",
                "start": 346,
                "end": 351,
                "decorators": [],
                "name": "Keyof",
                "optional": false,
                "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Registry",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Scope",
                        "optional": false,
                        "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 372,
          "end": 384,
          "decorators": [],
          "name": "scope",
          "optional": false,
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
                "decorators": [],
                "name": "Scope",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 386,
          "end": 398,
          "decorators": [],
          "name": "event",
          "optional": false,
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
                "decorators": [],
                "name": "Event",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 407,
                  "end": 426,
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
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 410,
                      "end": 415,
                      "decorators": [],
                      "name": "scope",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 419,
                      "end": 424,
                      "decorators": [],
                      "name": "event",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
