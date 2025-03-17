__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 32,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 30,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 29,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 25,
                "end": 29
              }
            },
            "static": false,
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 75,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 61,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 72,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 68,
                "end": 72
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 53,
          "end": 54,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 118,
      "body": {
        "type": "TSInterfaceBody",
        "start": 98,
        "end": 118,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 104,
            "end": 116,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 115,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 111,
                "end": 115
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 96,
          "end": 97,
          "expression": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 127,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "C",
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
      "start": 129,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 137,
            "end": 156,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 137,
              "end": 154,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 137,
                "end": 150,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 137,
                  "end": 148,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 137,
                    "end": 144,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 137,
                      "end": 142,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 142,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 148,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
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
