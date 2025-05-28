__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "ABC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 29,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 27,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "abc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
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
  "start": 28,
  "end": 158,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 59,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "ABC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 43,
            "end": 59,
            "properties": [
              {
                "type": "Property",
                "start": 45,
                "end": 57,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "abc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 50,
                  "end": 57,
                  "value": "Hello",
                  "raw": "\"Hello\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 139,
      "end": 158,
      "expression": {
        "type": "MemberExpression",
        "start": 139,
        "end": 158,
        "object": {
          "type": "Identifier",
          "start": 139,
          "end": 145,
          "decorators": [],
          "name": "window",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 146,
          "end": 158,
          "decorators": [],
          "name": "localStorage",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
