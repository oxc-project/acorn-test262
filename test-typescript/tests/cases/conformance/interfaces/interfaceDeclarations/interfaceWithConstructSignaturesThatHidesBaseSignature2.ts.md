__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 55,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 20,
            "end": 53,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 28,
                "end": 52,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 30,
                    "end": 40,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 41,
                    "end": 50,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 44,
                        "end": 50
                      }
                    }
                  }
                ]
              }
            },
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 186,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 186,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 93,
            "end": 115,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 114,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 103,
                    "end": 112,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 106,
                        "end": 112
                      }
                    }
                  }
                ]
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 83,
          "end": 86,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 74,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 202,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 202,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "decorators": [],
                  "name": "Derived",
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
      "start": 204,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 212,
            "end": 219,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
