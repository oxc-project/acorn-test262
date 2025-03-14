interfaceWithCallSignaturesThatHidesBaseSignature2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 51,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 49,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 48,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 26,
                    "end": 36,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 27,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 29,
                        "end": 35
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 37,
                    "end": 46,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  }
                ]
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
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 118,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 118,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 98,
            "end": 116,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 102,
                "end": 115,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 104,
                    "end": 113,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 105,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 105,
                      "end": 113,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 107,
                        "end": 113
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 79,
          "end": 82,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 82,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 70,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 134,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 127,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 134,
                  "decorators": [],
                  "name": "Derived",
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
      "start": 136,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 144,
            "end": 147,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "d",
              "optional": false
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
