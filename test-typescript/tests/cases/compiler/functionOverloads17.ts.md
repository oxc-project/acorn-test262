functionOverloads17.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 26,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
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
              "key": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 17,
                "end": 24,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 18,
                  "end": 24
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 27,
      "end": 71,
      "async": false,
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 66,
                    "end": 68,
                    "raw": "\"\"",
                    "value": ""
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
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
              "key": {
                "type": "Identifier",
                "start": 43,
                "end": 44,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 45,
                  "end": 51
                }
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
