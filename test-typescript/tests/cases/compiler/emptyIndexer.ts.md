emptyIndexer.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 30,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 16,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 65,
      "body": {
        "type": "TSInterfaceBody",
        "start": 45,
        "end": 65,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 48,
            "end": 63,
            "parameters": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 57,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 51,
                    "end": 57
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 60,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 62,
                  "decorators": [],
                  "name": "I1",
                  "optional": false
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
        "start": 42,
        "end": 44,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 77,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 77,
                  "decorators": [],
                  "name": "I2",
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
      "type": "VariableDeclaration",
      "start": 80,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 97,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "n",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 88,
            "end": 97,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 88,
              "end": 95,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 88,
                "end": 93,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 90,
                  "end": 92,
                  "raw": "''",
                  "value": ""
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "m",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
