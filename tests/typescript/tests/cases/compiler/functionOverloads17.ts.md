__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
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
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
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
      },
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 71,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 56,
            "end": 69,
            "argument": {
              "type": "ObjectExpression",
              "start": 63,
              "end": 69,
              "properties": [
                {
                  "type": "Property",
                  "start": 64,
                  "end": 68,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 66,
                    "end": 68,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
