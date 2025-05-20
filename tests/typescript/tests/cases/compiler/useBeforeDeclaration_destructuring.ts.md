__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 2,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 0,
        "end": 1,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 7,
          "end": 33,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 7,
            "end": 17,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 9,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 11,
                "end": 16,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 11,
                  "end": 16,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 11,
                    "end": 12,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 16,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 20,
            "end": 33,
            "properties": [
              {
                "type": "Property",
                "start": 21,
                "end": 26,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 22,
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
                  "start": 24,
                  "end": 26,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 28,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 31,
                  "end": 32,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 37,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 39,
      "end": 91,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 89,
        "end": 91,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 52,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 53,
          "end": 87,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 54,
              "end": 55,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 57,
              "end": 62,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 57,
                "end": 62,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 87,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 87,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 71,
                "end": 87,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 72,
                    "end": 78
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 71,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
