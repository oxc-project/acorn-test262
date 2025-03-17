__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 272,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 84,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 68,
            "end": 82,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 74,
              "name": "always",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 82,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 78,
                "end": 82
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 177,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 112,
          "name": "result",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 112,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 105,
              "end": 112
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 177,
        "body": [
          {
            "type": "IfStatement",
            "start": 120,
            "end": 175,
            "test": {
              "type": "MemberExpression",
              "start": 124,
              "end": 144,
              "object": {
                "type": "TSAsExpression",
                "start": 125,
                "end": 136,
                "expression": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 131,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 136,
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "property": {
                "type": "Identifier",
                "start": 138,
                "end": 144,
                "name": "always",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 146,
              "end": 175,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 156,
                  "end": 169,
                  "argument": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 169,
                    "name": "result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 178,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 204,
          "name": "result",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 195,
            "end": 204,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 197,
              "end": 204
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 271,
        "body": [
          {
            "type": "IfStatement",
            "start": 212,
            "end": 269,
            "test": {
              "type": "MemberExpression",
              "start": 216,
              "end": 238,
              "object": {
                "type": "TSAsExpression",
                "start": 218,
                "end": 229,
                "expression": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 224,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 228,
                  "end": 229,
                  "typeName": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 238,
                "name": "always",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 240,
              "end": 269,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 250,
                  "end": 263,
                  "argument": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 263,
                    "name": "result",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
