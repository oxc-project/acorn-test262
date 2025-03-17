__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 267,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 10,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 26,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 27,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 31,
            "end": 44,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 35,
              "name": "naam",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 58,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "name": "age",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
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
      "start": 62,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 87,
            "name": "bob",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 87,
                  "name": "Person",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 115,
            "name": "alice",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 115,
                  "name": "Person",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 226,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 266,
          "id": {
            "type": "ObjectPattern",
            "start": 232,
            "end": 245,
            "properties": [
              {
                "type": "Property",
                "start": 234,
                "end": 238,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 238,
                  "name": "naam",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 238,
                  "name": "naam",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 240,
                "end": 243,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "name": "age",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "name": "age",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 248,
            "end": 266,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 249,
                "end": 255,
                "argument": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 255,
                  "name": "bob",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 257,
                "end": 265,
                "argument": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 265,
                  "name": "alice",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
