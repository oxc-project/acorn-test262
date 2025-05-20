__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 79,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 76,
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 61,
                "end": 76,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 63,
                    "end": 74,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 66,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 70,
                        "end": 74
                      }
                    },
                    "static": false,
                    "typeParameters": null
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
  "end": 41,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 41,
      "directive": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
