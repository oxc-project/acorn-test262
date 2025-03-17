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
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 76,
            "name": "$",
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
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 66,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
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
        "callee": {
          "type": "MemberExpression",
          "start": 33,
          "end": 38,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "$",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
