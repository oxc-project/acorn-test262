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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 55,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 20,
            "end": 53,
            "typeParameters": null,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 31,
                      "end": 39,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 33,
                        "end": 39
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 41,
                    "end": 50,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 42,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 44,
                        "end": 50
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 74,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 83,
          "end": 86,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "name": "Foo",
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
        "start": 87,
        "end": 186,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 93,
            "end": 115,
            "typeParameters": null,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 112,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 106,
                        "end": 112
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 202,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "name": "Derived",
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
      "start": 204,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 212,
            "end": 219,
            "callee": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
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
