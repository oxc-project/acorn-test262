hidingIndexSignatures.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 36,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 34,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "a",
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
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 33,
                "members": []
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
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 141,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 66,
            "end": 86,
            "parameters": [
              {
                "type": "Identifier",
                "start": 67,
                "end": 76,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 68,
                  "end": 76,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 79,
                "end": 85
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 58,
          "end": 59,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 151,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 148,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 150,
                "end": 151,
                "typeName": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "B",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 153,
      "end": 159,
      "expression": {
        "type": "MemberExpression",
        "start": 153,
        "end": 158,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 155,
          "end": 157,
          "raw": "\"\"",
          "value": ""
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 188,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "decorators": [],
                  "name": "A",
                  "optional": false
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
      "type": "ExpressionStatement",
      "start": 190,
      "end": 196,
      "expression": {
        "type": "MemberExpression",
        "start": 190,
        "end": 195,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 190,
          "end": 191,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 192,
          "end": 194,
          "raw": "\"\"",
          "value": ""
        }
      }
    }
  ],
  "sourceType": "script"
}
```
