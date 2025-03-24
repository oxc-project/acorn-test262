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
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 31,
          "name": "param",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 22,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 23,
                      "end": 29
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 34,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "expression": {
        "type": "CallExpression",
        "start": 36,
        "end": 59,
        "callee": {
          "type": "Identifier",
          "start": 36,
          "end": 39,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 44,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
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
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
