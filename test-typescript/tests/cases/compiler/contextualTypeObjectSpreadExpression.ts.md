__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 25,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 21,
                "end": 24,
                "literal": {
                  "type": "Literal",
                  "start": 21,
                  "end": 24,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
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
      "start": 28,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 36,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 59,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 38,
          "end": 39,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 42,
          "end": 59,
          "properties": [
            {
              "type": "SpreadElement",
              "start": 44,
              "end": 57,
              "argument": {
                "type": "ObjectExpression",
                "start": 47,
                "end": 57,
                "properties": [
                  {
                    "type": "Property",
                    "start": 49,
                    "end": 55,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 52,
                      "end": 55,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
