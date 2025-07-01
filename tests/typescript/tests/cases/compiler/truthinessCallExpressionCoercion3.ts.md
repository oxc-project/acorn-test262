__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 61
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "always",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 74
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 78,
                "end": 82
              },
              "start": 76,
              "end": 82
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 68,
            "end": 82
          }
        ],
        "start": 62,
        "end": 84
      },
      "declare": false,
      "start": 50,
      "end": 84
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 96
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 105,
              "end": 112
            },
            "start": 103,
            "end": 112
          },
          "start": 97,
          "end": 112
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 131
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 136
                  },
                  "typeArguments": null,
                  "start": 135,
                  "end": 136
                },
                "start": 125,
                "end": 136
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "always",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 144
              },
              "optional": false,
              "computed": false,
              "start": 124,
              "end": 144
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 169
                  },
                  "start": 156,
                  "end": 169
                }
              ],
              "start": 146,
              "end": 175
            },
            "alternate": null,
            "start": 120,
            "end": 175
          }
        ],
        "start": 114,
        "end": 177
      },
      "expression": false,
      "start": 86,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 197,
              "end": 204
            },
            "start": 195,
            "end": 204
          },
          "start": 189,
          "end": 204
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 224
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 229
                  },
                  "typeArguments": null,
                  "start": 228,
                  "end": 229
                },
                "start": 218,
                "end": 229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "always",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 238
              },
              "optional": false,
              "computed": false,
              "start": 216,
              "end": 238
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 263
                  },
                  "start": 250,
                  "end": 263
                }
              ],
              "start": 240,
              "end": 269
            },
            "alternate": null,
            "start": 212,
            "end": 269
          }
        ],
        "start": 206,
        "end": 271
      },
      "expression": false,
      "start": 178,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 50,
  "end": 271
}
```
