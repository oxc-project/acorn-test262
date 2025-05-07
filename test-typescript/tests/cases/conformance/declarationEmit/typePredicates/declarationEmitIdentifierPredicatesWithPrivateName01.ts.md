__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
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
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
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
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 105,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 39,
        "end": 105,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 66,
          "end": 105,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 72,
              "end": 103,
              "argument": {
                "type": "BinaryExpression",
                "start": 79,
                "end": 102,
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "start": 79,
                  "end": 89,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 86,
                    "end": 89,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 87,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 89,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "operator": "typeof",
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "start": 94,
                  "end": 102,
                  "raw": "\"number\"",
                  "value": "number",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 56,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 53,
                "end": 56
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 57,
          "end": 65,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 59,
            "end": 65,
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
