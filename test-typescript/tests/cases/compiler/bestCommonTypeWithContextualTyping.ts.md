bestCommonTypeWithContextualTyping.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 568,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 33,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "dummy",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 49,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Contextual",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 98,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "dummy",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 96,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 95,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 92,
                "end": 95
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 71,
        "decorators": [],
        "name": "Ellement",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 115,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 115,
                  "decorators": [],
                  "name": "Ellement",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 327,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 348,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 348,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 336,
                "end": 348,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 336,
                  "end": 346,
                  "typeName": {
                    "type": "Identifier",
                    "start": 336,
                    "end": 346,
                    "decorators": [],
                    "name": "Contextual",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 351,
            "end": 354,
            "elements": [
              {
                "type": "Identifier",
                "start": 352,
                "end": 353,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 418,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 417,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 406,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 379,
                "end": 406,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 381,
                    "end": 404,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 382,
                        "end": 391,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 383,
                          "end": 391,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 385,
                            "end": 391
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 392,
                      "end": 404,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 394,
                        "end": 404,
                        "typeName": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 404,
                          "decorators": [],
                          "name": "Contextual",
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
            "type": "ObjectExpression",
            "start": 409,
            "end": 417,
            "properties": [
              {
                "type": "Property",
                "start": 411,
                "end": 415,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 415,
                  "decorators": [],
                  "name": "e",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 504,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 489,
            "decorators": [],
            "name": "conditional",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 489,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 479,
                "end": 489,
                "typeName": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 489,
                  "decorators": [],
                  "name": "Contextual",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 492,
            "end": 504,
            "alternate": {
              "type": "Identifier",
              "start": 503,
              "end": 504,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 492,
              "end": 496,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 518,
      "end": 556,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 555,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 546,
            "decorators": [],
            "name": "contextualOr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 534,
              "end": 546,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 536,
                "end": 546,
                "typeName": {
                  "type": "Identifier",
                  "start": 536,
                  "end": 546,
                  "decorators": [],
                  "name": "Contextual",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "start": 549,
            "end": 555,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 549,
              "end": 550,
              "decorators": [],
              "name": "e",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "e",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
