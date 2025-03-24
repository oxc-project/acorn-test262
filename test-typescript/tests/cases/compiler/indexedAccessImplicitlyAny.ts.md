__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 28,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 26,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "name": "foof",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
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
      "type": "EmptyStatement",
      "start": 28,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 48,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 47,
                "end": 48,
                "typeName": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "I",
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
      "type": "ExpressionStatement",
      "start": 50,
      "end": 56,
      "expression": {
        "type": "MemberExpression",
        "start": 50,
        "end": 55,
        "object": {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 52,
          "end": 55,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 66,
      "expression": {
        "type": "MemberExpression",
        "start": 57,
        "end": 65,
        "object": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 59,
          "end": 64,
          "value": "foo",
          "raw": "\"foo\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
