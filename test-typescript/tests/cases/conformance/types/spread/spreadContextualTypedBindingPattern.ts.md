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
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 35,
              "decorators": [],
              "name": "naam",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 47,
            "end": 58,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "age",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 58,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 52,
                "end": 58
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 26,
        "decorators": [],
        "name": "Person",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 87,
            "decorators": [],
            "name": "bob",
            "optional": false,
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
                  "decorators": [],
                  "name": "Person",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 115,
            "decorators": [],
            "name": "alice",
            "optional": false,
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
                  "decorators": [],
                  "name": "Person",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 232,
            "end": 245,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 234,
                "end": 238,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 238,
                  "decorators": [],
                  "name": "naam",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 238,
                  "decorators": [],
                  "name": "naam",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 240,
                "end": 243,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "decorators": [],
                  "name": "age",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 243,
                  "decorators": [],
                  "name": "age",
                  "optional": false
                }
              }
            ]
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
                  "decorators": [],
                  "name": "bob",
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
                  "decorators": [],
                  "name": "alice",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
