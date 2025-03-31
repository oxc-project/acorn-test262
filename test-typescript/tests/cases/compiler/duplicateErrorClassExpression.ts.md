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
        "name": "ComplicatedTypeBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 46,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 40,
                    "end": 46
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "ABase",
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
      "start": 58,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 90,
        "name": "ComplicatedTypeDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 99,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "ADerived",
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
      "start": 122,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "name": "ABase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "ADerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 205,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 206,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 212,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                  "name": "ComplicatedTypeBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 251,
            "end": 315,
            "id": {
              "type": "Identifier",
              "start": 257,
              "end": 264,
              "name": "Derived",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 273,
              "end": 277,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 278,
              "end": 315,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 284,
                  "end": 313,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 287,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": true,
                  "readonly": false,
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
                        "name": "ComplicatedTypeDerived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 338,
            "name": "obj",
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
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
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
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "obj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 361,
          "end": 362,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
