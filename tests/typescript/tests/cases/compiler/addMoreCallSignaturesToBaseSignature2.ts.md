__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 43,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 41,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 31,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 24,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 67,
          "end": 70,
          "expression": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 71,
        "end": 101,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 77,
            "end": 99,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 78,
                "end": 89,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 83,
                    "end": 89
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 114,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 113,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 132,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 124,
            "decorators": [],
            "name": "kitty",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 127,
            "end": 131,
            "callee": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 129,
                "end": 130,
                "value": 1,
                "raw": "1"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
