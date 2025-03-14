nonContextuallyTypedLogicalOr.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 33,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 32,
              "decorators": [],
              "name": "dummy",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 49,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 42,
                "end": 48
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
        "end": 20,
        "decorators": [],
        "name": "Contextual",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 98,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 98,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "dummy",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 96,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 95,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 92,
                "end": 95
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 71,
        "decorators": [],
        "name": "Ellement",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 117,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 117,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 117,
                  "decorators": [],
                  "name": "Contextual",
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
      "type": "VariableDeclaration",
      "start": 119,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 134,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 134,
                  "decorators": [],
                  "name": "Ellement",
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
      "start": 137,
      "end": 152,
      "expression": {
        "type": "MemberExpression",
        "start": 137,
        "end": 151,
        "computed": false,
        "object": {
          "type": "LogicalExpression",
          "start": 138,
          "end": 144,
          "operator": "||",
          "left": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "e",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 146,
          "end": 151,
          "decorators": [],
          "name": "dummy",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
