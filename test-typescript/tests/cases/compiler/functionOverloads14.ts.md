__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 26,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 15,
          "end": 26,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 16,
              "end": 25,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17,
                "end": 24,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 27,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 41,
        "end": 53,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 42,
          "end": 53,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 43,
              "end": 52,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 45,
                  "end": 51
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 94,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 80,
            "end": 92,
            "argument": {
              "type": "ObjectExpression",
              "start": 87,
              "end": 92,
              "properties": [
                {
                  "type": "Property",
                  "start": 88,
                  "end": 91,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 89,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 90,
                    "end": 91,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 69,
          "end": 77,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 70,
              "end": 76,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 71,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 72,
                  "end": 75
                }
              },
              "accessibility": null,
              "static": false
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
