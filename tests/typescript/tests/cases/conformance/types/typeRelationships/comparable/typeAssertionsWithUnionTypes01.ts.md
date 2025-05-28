__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
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
      "start": 33,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 54,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 76,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 74,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
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
      "type": "VariableDeclaration",
      "start": 78,
      "end": 105,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 86,
            "end": 104,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 94,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 90,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 92,
                  "end": 94,
                  "value": 10,
                  "raw": "10"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 96,
                "end": 102,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 98,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 100,
                  "end": 102,
                  "value": 20,
                  "raw": "20"
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
      "type": "VariableDeclaration",
      "start": 106,
      "end": 129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 124,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 124,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 113,
                "end": 124,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 113,
                    "end": 119
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 124,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 124,
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 144,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 143,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 139,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 151,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 154,
            "end": 168,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 155,
              "end": 166,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 155,
                  "end": 161
                },
                {
                  "type": "TSTypeReference",
                  "start": 164,
                  "end": 166,
                  "typeName": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 166,
                    "decorators": [],
                    "name": "I2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "expression": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 188,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 187,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 178,
            "end": 187,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 179,
              "end": 185
            },
            "expression": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 203,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 197,
            "end": 202,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 198,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 198,
                "end": 200,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 218,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 217,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 212,
            "end": 217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 213,
              "end": 215,
              "typeName": {
                "type": "Identifier",
                "start": 213,
                "end": 215,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
