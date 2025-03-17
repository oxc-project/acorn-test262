__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 24,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 21,
              "end": 24,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 28,
            "end": 35,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 32,
              "end": 35,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 40,
      "end": 82,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 54,
        "decorators": [],
        "name": "Stringify",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 75,
        "end": 81,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 75,
            "end": 78,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 79,
            "end": 81,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 78,
            "end": 79,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 54,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 55,
            "end": 71,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 65,
              "end": 71
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 84,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 98,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 92,
                "end": 98,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 92,
                    "end": 95,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 96,
                    "end": 98,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 96,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 101,
            "end": 104,
            "raw": "\"a\"",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 126,
            "decorators": [],
            "name": "z2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 126,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 123,
                  "end": 126,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 124,
                      "end": 125,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 123,
                  "decorators": [],
                  "name": "Stringify",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 129,
            "end": 132,
            "raw": "\"a\"",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
