__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 29,
        "decorators": [],
        "name": "ComplicatedTypeBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 58,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 90,
        "decorators": [],
        "name": "ComplicatedTypeDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 122,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "decorators": [],
        "name": "ABase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 153,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 147,
                "end": 153
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
      "type": "TSInterfaceDeclaration",
      "start": 157,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 175,
        "decorators": [],
        "name": "ADerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 191,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 185,
                "end": 191
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
      "type": "ClassDeclaration",
      "start": 195,
      "end": 240,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 205,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 238,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 315,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 247,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 251,
            "end": 315,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 257,
              "end": 264,
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 278,
              "end": 315,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 284,
                  "end": 313,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 287,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 356,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 355,
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 327,
                      "end": 328,
                      "value": 3,
                      "raw": "3"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 336,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 330,
                        "end": 336
                      }
                    },
                    "accessibility": null,
                    "static": false
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
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 343,
                  "end": 344,
                  "value": 3,
                  "raw": "3"
                },
                "value": {
                  "type": "Literal",
                  "start": 346,
                  "end": 353,
                  "value": "three",
                  "raw": "\"three\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 357,
      "end": 364,
      "expression": {
        "type": "MemberExpression",
        "start": 357,
        "end": 363,
        "object": {
          "type": "Identifier",
          "start": 357,
          "end": 360,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 361,
          "end": 362,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
