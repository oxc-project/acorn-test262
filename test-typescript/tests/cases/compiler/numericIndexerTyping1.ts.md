__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 266,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 36,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 31,
                "end": 35,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 66,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 61,
          "end": 62,
          "expression": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 52,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 78,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 98,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 94,
            "end": 98,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 96,
              "end": 97,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 176,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 176,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 176,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 178,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 192,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 192,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 195,
            "end": 200,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 195,
              "end": 197,
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 198,
              "end": 199,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
