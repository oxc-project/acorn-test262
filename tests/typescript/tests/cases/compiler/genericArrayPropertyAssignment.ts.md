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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 30,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
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
      "returnType": null,
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
              "left": {
                "type": "MemberExpression",
                "start": 50,
                "end": 61,
                "object": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 54,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 61,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 65,
                "end": 66,
                "value": 0,
                "raw": "0"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 84,
      "expression": {
        "type": "CallExpression",
        "start": 72,
        "end": 83,
        "callee": {
          "type": "Identifier",
          "start": 72,
          "end": 79,
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 80,
            "end": 82,
            "elements": []
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
