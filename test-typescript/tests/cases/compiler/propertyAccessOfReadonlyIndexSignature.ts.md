__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 42,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  }
                },
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 75,
            "name": "a",
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
                  "name": "Test",
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 79,
            "end": 82,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
