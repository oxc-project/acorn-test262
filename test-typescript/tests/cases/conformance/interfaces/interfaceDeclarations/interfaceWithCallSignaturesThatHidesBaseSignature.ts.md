interfaceWithCallSignaturesThatHidesBaseSignature.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 40,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 38,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 37,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 26,
                    "end": 35,
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
      "start": 42,
      "end": 109,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 109,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 78,
            "end": 107,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 106,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 82,
                "end": 106,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 84,
                    "end": 94,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 85,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 85,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 87,
                        "end": 93
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 95,
                    "end": 104,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 96,
                      "end": 104,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 98,
                        "end": 104
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
          "start": 68,
          "end": 71,
          "expression": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 59,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 125,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 125,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 125,
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
      "start": 127,
      "end": 139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 135,
            "end": 138,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
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
