__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 29,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 26,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
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
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 41,
            "end": 48,
            "properties": [
              {
                "type": "Property",
                "start": 43,
                "end": 47,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 46,
                  "end": 47,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 50,
        "end": 55,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 50,
          "end": 53,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 54,
          "end": 55,
          "raw": "4",
          "value": 4,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
