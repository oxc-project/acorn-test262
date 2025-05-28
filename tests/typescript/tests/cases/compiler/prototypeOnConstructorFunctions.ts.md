__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "const",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "options",
                    "optional": true,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 41,
                    "end": 49,
                    "decorators": [],
                    "name": "element",
                    "optional": true,
                    "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 72,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 72,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I1",
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
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 83,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 93,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
