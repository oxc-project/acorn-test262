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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 17,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 21,
            "end": 24,
            "value": "a",
            "raw": "\"a\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 28,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 32,
            "end": 35,
            "value": "b",
            "raw": "\"b\""
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 38,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 21,
              "end": 24,
              "value": "a",
              "raw": "\"a\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 28,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 32,
              "end": 35,
              "value": "b",
              "raw": "\"b\""
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 40,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 54,
        "name": "Stringify",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 65,
              "end": 71
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "value": {
              "cooked": "",
              "raw": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 79,
            "end": 81,
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
            "start": 78,
            "end": 79,
            "typeName": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 98,
            "name": "z1",
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
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 96,
                    "end": 98,
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
                    "start": 95,
                    "end": 96,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "name": "E",
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
          },
          "init": {
            "type": "Literal",
            "start": 101,
            "end": 104,
            "value": "a",
            "raw": "\"a\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 126,
            "name": "z2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 123,
                  "name": "Stringify",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 123,
                  "end": 126,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 124,
                      "end": 125,
                      "typeName": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 129,
            "end": 132,
            "value": "a",
            "raw": "\"a\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
