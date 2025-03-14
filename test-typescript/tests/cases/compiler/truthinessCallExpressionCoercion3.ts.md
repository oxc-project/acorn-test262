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
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 84,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 68,
            "end": 82,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 74,
              "decorators": [],
              "name": "always",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 177,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 177,
        "body": [
          {
            "type": "IfStatement",
            "start": 120,
            "end": 175,
            "alternate": null,
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
                    "decorators": [],
                    "name": "result",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 124,
              "end": 144,
              "computed": false,
              "object": {
                "type": "TSAsExpression",
                "start": 125,
                "end": 136,
                "expression": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 131,
                  "decorators": [],
                  "name": "result",
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
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 138,
                "end": 144,
                "decorators": [],
                "name": "always",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 97,
          "end": 112,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 103,
            "end": 112,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 105,
              "end": 112
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 178,
      "end": 271,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 271,
        "body": [
          {
            "type": "IfStatement",
            "start": 212,
            "end": 269,
            "alternate": null,
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
                    "decorators": [],
                    "name": "result",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 216,
              "end": 238,
              "computed": false,
              "object": {
                "type": "TSAsExpression",
                "start": 218,
                "end": 229,
                "expression": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 224,
                  "decorators": [],
                  "name": "result",
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
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 238,
                "decorators": [],
                "name": "always",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 188,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 204,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 195,
            "end": 204,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 197,
              "end": 204
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
