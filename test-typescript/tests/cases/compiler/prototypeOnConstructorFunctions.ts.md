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
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "const",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 57,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 26,
                "end": 57,
                "abstract": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 31,
                    "end": 39,
                    "decorators": [],
                    "name": "options",
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 41,
                    "end": 49,
                    "decorators": [],
                    "name": "element",
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false
      }
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 76,
            "end": 93,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 76,
              "end": 83,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 78,
                "end": 83,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 84,
              "end": 93,
              "decorators": [],
              "name": "prototype",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 101,
          "end": 105,
          "raw": "\"yo\"",
          "value": "yo"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
