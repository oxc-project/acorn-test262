duplicateErrorClassExpression.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 364,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 57,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 36,
            "end": 55,
            "parameters": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 46,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 40,
                    "end": 46
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 54,
                  "decorators": [],
                  "name": "ABase",
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
        "start": 10,
        "end": 29,
        "decorators": [],
        "name": "ComplicatedTypeBase",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 121,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 121,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 97,
            "end": 119,
            "parameters": [
              {
                "type": "Identifier",
                "start": 98,
                "end": 107,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 99,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 118,
                  "decorators": [],
                  "name": "ADerived",
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
        "start": 68,
        "end": 90,
        "decorators": [],
        "name": "ComplicatedTypeDerived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 122,
      "end": 156,
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 156,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 144,
            "end": 154,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 153,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 147,
                "end": 153
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "decorators": [],
        "name": "ABase",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 157,
      "end": 194,
      "body": {
        "type": "TSInterfaceBody",
        "start": 176,
        "end": 194,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 182,
            "end": 192,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 191,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 185,
                "end": 191
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 175,
        "decorators": [],
        "name": "ADerived",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 240,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 238,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 237,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 218,
                "end": 237,
                "typeName": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 237,
                  "decorators": [],
                  "name": "ComplicatedTypeBase",
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
        "start": 201,
        "end": 205,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 315,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 251,
            "end": 315,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 278,
              "end": 315,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 284,
                  "end": 313,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": true,
                  "key": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 287,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 288,
                    "end": 312,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 312,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 312,
                        "decorators": [],
                        "name": "ComplicatedTypeDerived",
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
              "start": 257,
              "end": 264,
              "decorators": [],
              "name": "Derived",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 338,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 338,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 325,
                "end": 338,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 327,
                    "end": 336,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 327,
                      "end": 328,
                      "raw": "3",
                      "value": 3
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 336,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 330,
                        "end": 336
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 341,
            "end": 355,
            "properties": [
              {
                "type": "Property",
                "start": 343,
                "end": 353,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 343,
                  "end": 344,
                  "raw": "3",
                  "value": 3
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 346,
                  "end": 353,
                  "raw": "\"three\"",
                  "value": "three"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 364,
      "expression": {
        "type": "MemberExpression",
        "start": 357,
        "end": 363,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 357,
          "end": 360,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 361,
          "end": 362,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
