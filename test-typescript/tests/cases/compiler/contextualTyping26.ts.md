__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 34,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 34,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 31,
          "decorators": [],
          "name": "param",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 19,
              "end": 31,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 20,
                  "end": 30,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 22,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 23,
                      "end": 29
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 34,
      "end": 35
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 36,
        "end": 59,
        "arguments": [
          {
            "type": "TSTypeAssertion",
            "start": 40,
            "end": 58,
            "expression": {
              "type": "ObjectExpression",
              "start": 55,
              "end": 57,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 41,
              "end": 53,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 42,
                  "end": 52,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 44,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 45,
                      "end": 51
                    }
                  }
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
