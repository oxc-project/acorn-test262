__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 30,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 30,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 17,
                    "end": 28,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 20,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 22,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 24,
                        "end": 28
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 42,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 41,
      "expression": {
        "type": "CallExpression",
        "start": 33,
        "end": 40,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 33,
          "end": 38,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "$",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
