modFunctionCrash.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 112,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 23,
            "end": 47,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 34,
                "end": 45,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 37,
                    "end": 45,
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
                }
              }
            ]
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 139,
      "expression": {
        "type": "CallExpression",
        "start": 115,
        "end": 138,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 119,
            "end": 137,
            "async": false,
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
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 115,
          "end": 118,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "Q",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
