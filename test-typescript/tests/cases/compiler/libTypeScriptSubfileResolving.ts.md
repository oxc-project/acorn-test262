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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "DOMIterable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "name": "abc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 57,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 57,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 57,
                  "name": "DOMIterable",
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
          "init": {
            "type": "ObjectExpression",
            "start": 60,
            "end": 76,
            "properties": [
              {
                "type": "Property",
                "start": 62,
                "end": 74,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 67,
                  "end": 74,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 175,
      "expression": {
        "type": "MemberExpression",
        "start": 156,
        "end": 175,
        "object": {
          "type": "Identifier",
          "start": 156,
          "end": 162,
          "name": "window",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 163,
          "end": 175,
          "name": "localStorage",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
