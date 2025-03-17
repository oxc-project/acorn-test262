__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 60,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 58,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "name": "const",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 57,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 26,
                "end": 57,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 39,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 41,
                    "end": 49,
                    "name": "element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 54,
                    "end": 57
                  }
                }
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
      "start": 63,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 72,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 72,
                  "name": "I1",
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 106,
      "expression": {
        "type": "AssignmentExpression",
        "start": 76,
        "end": 105,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 76,
          "end": 98,
          "object": {
            "type": "MemberExpression",
            "start": 76,
            "end": 93,
            "object": {
              "type": "MemberExpression",
              "start": 76,
              "end": 83,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 83,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 93,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 101,
          "end": 105,
          "value": "yo",
          "raw": "\"yo\""
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
