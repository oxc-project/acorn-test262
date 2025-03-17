__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 70,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 68,
            "name": "$",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 53,
                "end": 68,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 55,
                    "end": 66,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 58,
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
                      "start": 60,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 62,
                        "end": 66
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
