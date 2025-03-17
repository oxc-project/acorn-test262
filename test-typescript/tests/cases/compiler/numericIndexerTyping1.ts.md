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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 38,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 36,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 31,
                "end": 35,
                "typeName": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 35,
                  "name": "Date",
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
      "start": 40,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 52,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 61,
          "end": 62,
          "expression": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 66,
        "body": []
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 76,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 94,
            "end": 98,
            "object": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 96,
              "end": 97,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 176,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 176,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 176,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 192,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 192,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 186,
                "end": 192
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 195,
            "end": 200,
            "object": {
              "type": "Identifier",
              "start": 195,
              "end": 197,
              "name": "i2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 198,
              "end": 199,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
