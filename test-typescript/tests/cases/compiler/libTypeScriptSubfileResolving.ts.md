__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 7,
  "end": 7,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
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
        "end": 21,
        "decorators": [],
        "name": "DOMIterable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 176,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 57,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 57,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 57,
                  "decorators": [],
                  "name": "DOMIterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 60,
            "end": 76,
            "properties": [
              {
                "type": "Property",
                "start": 62,
                "end": 74,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 67,
                  "end": 74,
                  "raw": "\"Hello\"",
                  "value": "Hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 175,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 156,
        "end": 175,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 156,
          "end": 162,
          "decorators": [],
          "name": "window",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 163,
          "end": 175,
          "decorators": [],
          "name": "localStorage",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
