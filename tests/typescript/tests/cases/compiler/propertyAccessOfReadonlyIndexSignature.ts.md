__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 54,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 21,
            "end": 52,
            "parameters": [
              {
                "type": "Identifier",
                "start": 31,
                "end": 42,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              }
            },
            "readonly": true,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 76,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 75,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 75,
                  "decorators": [],
                  "name": "Test",
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 91,
      "expression": {
        "type": "AssignmentExpression",
        "start": 77,
        "end": 90,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 77,
          "end": 82,
          "object": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 82,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 85,
          "end": 90,
          "value": "baz",
          "raw": "'baz'"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
