__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 7,
  "end": 7
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DOMIterable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              },
              "start": 27,
              "end": 35
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 35
          }
        ],
        "start": 22,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DOMIterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 57
                },
                "typeArguments": null,
                "start": 46,
                "end": 57
              },
              "start": 44,
              "end": 57
            },
            "start": 43,
            "end": 57
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 65
                },
                "value": {
                  "type": "Literal",
                  "value": "Hello",
                  "raw": "\"Hello\"",
                  "start": 67,
                  "end": 74
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 62,
                "end": 74
              }
            ],
            "start": 60,
            "end": 76
          },
          "definite": false,
          "start": 43,
          "end": 76
        }
      ],
      "declare": false,
      "start": 37,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "window",
          "optional": false,
          "typeAnnotation": null,
          "start": 156,
          "end": 162
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "localStorage",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 175
        },
        "optional": false,
        "computed": false,
        "start": 156,
        "end": 175
      },
      "directive": null,
      "start": 156,
      "end": 175
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 175
}
```
