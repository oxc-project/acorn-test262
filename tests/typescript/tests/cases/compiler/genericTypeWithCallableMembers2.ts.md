__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 228,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 113,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 113,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 53,
            "end": 64,
            "argument": {
              "type": "CallExpression",
              "start": 60,
              "end": 63,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 60,
                "end": 61,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 45,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 45,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 44,
              "end": 45,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 39,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 24,
              "end": 39,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 26,
                  "end": 37,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 228,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 167,
        "end": 228,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 173,
            "end": 188,
            "argument": {
              "type": "NewExpression",
              "start": 180,
              "end": 187,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 184,
                "end": 185,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 129,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 161,
          "end": 165,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 162,
            "end": 165,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 165,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 160,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 159,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 140,
              "end": 159,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 142,
                  "end": 157,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
