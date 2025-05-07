__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 69,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 69,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 43,
            "end": 67,
            "argument": {
              "type": "BinaryExpression",
              "start": 50,
              "end": 66,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 50,
                "end": 61,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 54,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 61,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 65,
                "end": 66,
                "raw": "0",
                "value": 0,
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
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 39,
          "decorators": [],
          "name": "list",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 23,
              "end": 39,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 24,
                  "end": 38,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 30,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
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
      "type": "ExpressionStatement",
      "start": 72,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 72,
        "end": 83,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 80,
            "end": 82,
            "elements": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 72,
          "end": 79,
          "decorators": [],
          "name": "isEmpty",
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
