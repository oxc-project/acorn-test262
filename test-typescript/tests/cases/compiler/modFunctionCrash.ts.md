__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 112,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 23,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "f",
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
                "start": 34,
                "end": 45,
                "name": "fn",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 37,
                    "end": 45,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 39,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 41,
                        "end": 45
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 139,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 138,
        "callee": {
          "type": "MemberExpression",
          "start": 115,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "Q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 119,
            "end": 137,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 130,
              "end": 137,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 131,
                  "end": 136,
                  "expression": {
                    "type": "ThisExpression",
                    "start": 131,
                    "end": 135
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
