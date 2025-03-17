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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 32,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 30,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 53,
          "end": 54,
          "expression": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "A",
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
        "start": 55,
        "end": 75,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 61,
            "end": 73,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 76,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 96,
          "end": 97,
          "expression": {
            "type": "Identifier",
            "start": 96,
            "end": 97,
            "name": "B",
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
        "start": 98,
        "end": 118,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 104,
            "end": 116,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 107,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "name": "C",
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
      "start": 129,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 137,
            "end": 156,
            "callee": {
              "type": "MemberExpression",
              "start": 137,
              "end": 154,
              "object": {
                "type": "CallExpression",
                "start": 137,
                "end": 150,
                "callee": {
                  "type": "MemberExpression",
                  "start": 137,
                  "end": 148,
                  "object": {
                    "type": "CallExpression",
                    "start": 137,
                    "end": 144,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 137,
                      "end": 142,
                      "object": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 139,
                        "end": 142,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 148,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "name": "baz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
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
