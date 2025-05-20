__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 67,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 67,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 65,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 54,
              "decorators": [],
              "name": "document",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 64,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 64,
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 33,
        "end": 39,
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 94,
            "decorators": [],
            "name": "window",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 94,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 94,
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 97,
      "end": 208,
      "body": {
        "type": "TSModuleBlock",
        "start": 108,
        "end": 208,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 114,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 118,
                "end": 129,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 122,
                  "end": 129,
                  "raw": "\"test1\"",
                  "value": "test1"
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 135,
            "end": 177,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 176,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 143,
                  "end": 176,
                  "raw": "\"test 2\\\nisn't this a lot of fun\"",
                  "value": "test 2isn't this a lot of fun"
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 182,
            "end": 206,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 186,
                "end": 205,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 190,
                  "end": 205,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 196,
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 205,
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
