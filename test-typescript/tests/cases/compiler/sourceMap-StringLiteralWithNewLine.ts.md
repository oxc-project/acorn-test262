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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "name": "Document",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 23,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 39,
        "name": "Window",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 40,
        "end": 67,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 65,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 54,
              "name": "document",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 64,
                  "name": "Document",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 94,
            "name": "window",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 88,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 94,
                  "name": "Window",
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
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 97,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 119,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 122,
                  "end": 129,
                  "value": "test1",
                  "raw": "\"test1\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 143,
                  "end": 176,
                  "value": "test 2isn't this a lot of fun",
                  "raw": "\"test 2\\\nisn't this a lot of fun\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 190,
                  "end": 205,
                  "object": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 196,
                    "name": "window",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 205,
                    "name": "document",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
