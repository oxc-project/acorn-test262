ClassAndModuleThatMergeWithModuleMemberThatUsesClassTypeParameter.ts
```json
{
  "type": "Program",
  "start": 30,
  "end": 502,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 81,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 81,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 65,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 56,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 58,
                "end": 64
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 79,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 75,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 44,
        "decorators": [],
        "name": "clodule1",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 44,
        "end": 47,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 45,
            "end": 46,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 83,
      "end": 127,
      "body": {
        "type": "TSModuleBlock",
        "start": 99,
        "end": 127,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 105,
            "end": 125,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 122,
              "end": 125,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 116,
                "end": 120,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 117,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 119,
                    "end": 120,
                    "typeName": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 120,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 98,
        "decorators": [],
        "name": "clodule1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 180,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 153,
            "end": 164,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 153,
              "end": 155,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 169,
            "end": 178,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 174,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 177,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 143,
        "decorators": [],
        "name": "clodule2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 143,
        "end": 146,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 144,
            "end": 145,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 182,
      "end": 286,
      "body": {
        "type": "TSModuleBlock",
        "start": 198,
        "end": 286,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 204,
            "end": 213,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 208,
                "end": 212,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 212,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 209,
                    "end": 212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 212,
                        "decorators": [],
                        "name": "T",
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
            "type": "ClassDeclaration",
            "start": 219,
            "end": 284,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 239,
              "end": 284,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 249,
                  "end": 260,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 251,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 251,
                    "end": 259,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 253,
                      "end": 259
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 269,
                  "end": 278,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 274,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 277,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 276,
                      "end": 277,
                      "typeName": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 277,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 225,
              "end": 226,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 226,
              "end": 239,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 227,
                  "end": 238,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 237,
                    "end": 238,
                    "typeName": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 238,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 228,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 197,
        "decorators": [],
        "name": "clodule2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 288,
      "end": 339,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 312,
            "end": 323,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 312,
              "end": 314,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 322,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 316,
                "end": 322
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 328,
            "end": 337,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 333,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 335,
                "end": 336,
                "typeName": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 302,
        "decorators": [],
        "name": "clodule3",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 302,
        "end": 305,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 303,
            "end": 304,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 341,
      "end": 390,
      "body": {
        "type": "TSModuleBlock",
        "start": 357,
        "end": 390,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 363,
            "end": 388,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 370,
              "end": 388,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 374,
                  "end": 387,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 375,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 378,
                    "end": 387,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 380,
                        "end": 385,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 382,
                          "decorators": [],
                          "name": "id",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "T",
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 356,
        "decorators": [],
        "name": "clodule3",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 392,
      "end": 443,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 443,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 416,
            "end": 427,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 416,
              "end": 418,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 426,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 420,
                "end": 426
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 432,
            "end": 441,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 432,
              "end": 437,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 439,
                "end": 440,
                "typeName": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 406,
        "decorators": [],
        "name": "clodule4",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 406,
        "end": 409,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 407,
            "end": 408,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 407,
              "end": 408,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 445,
      "end": 501,
      "body": {
        "type": "TSModuleBlock",
        "start": 461,
        "end": 501,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 467,
            "end": 499,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 475,
              "end": 499,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 485,
                  "end": 493,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 489,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 489,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 491,
                      "end": 492,
                      "typeName": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 473,
              "end": 474,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 460,
        "decorators": [],
        "name": "clodule4",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
